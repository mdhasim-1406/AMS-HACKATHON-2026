import Team from "../models/Team.js";
import { PROBLEM_STATEMENTS } from "../data/problemStatements.js";

// @desc    Look up a team by registration ID OR leader/member email and return the
//          official problem statements available specifically for their track & type
// @route   GET /api/ps-selection/:identifier
// @access  Public (visitor-provided team identity)
export const getTeamSelection = async (req, res) => {
  try {
    const identifier = String(req.params.registrationId || req.params.identifier || "").trim();
    if (!identifier) {
      return res.status(400).json({ success: false, message: "Registration ID or email is required." });
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    let team = null;

    if (isEmail) {
      const email = identifier.toLowerCase();
      team = await Team.findOne({
        isDeleted: { $ne: true },
        $or: [
          { "leader.email": email },
          { "members.email": email },
        ],
      })
        .select("teamName track leader paymentStatus problemTitle problemAbstract selectedProblemId selectedAt registrationId participationType")
        .lean();
    } else {
      const regId = identifier.toUpperCase();
      team = await Team.findOne({
        registrationId: { $regex: new RegExp(`^${regId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i") },
        isDeleted: { $ne: true },
      })
        .select("teamName track leader paymentStatus problemTitle problemAbstract selectedProblemId selectedAt registrationId participationType")
        .lean();
    }

    if (!team) {
      return res.status(404).json({
        success: false,
        message: isEmail
          ? "No team found for this email. Use the email your team leader registered with, or your Registration ID."
          : "No team found for this Registration ID. Double-check your ID from the confirmation email.",
      });
    }

    const eligible = ["PAID", "CASH_PAID", "WAIVED"].includes(team.paymentStatus);
    if (!eligible) {
      return res.status(403).json({
        success: false,
        message: `Payment status is "${team.paymentStatus}". Only paid/confirmed teams can select a problem statement.`,
      });
    }

    const teamType = (team.participationType || "software").toLowerCase();
    
    // Filter all statements for this team's track
    const allTrackProblems = PROBLEM_STATEMENTS.filter((p) => p.track === team.track);
    
    // Filter by participation type (hardware vs software) if category matches
    let availableProblems = allTrackProblems.filter((p) => {
      const pCat = (p.category || "Software").toLowerCase();
      if (teamType === "hardware") {
        return pCat === "hardware" || pCat === "dual track";
      } else {
        return pCat === "software" || pCat === "dual track";
      }
    });

    // Fallback: If no type-specific match exists but track has statements, show track statements
    if (availableProblems.length === 0 && allTrackProblems.length > 0) {
      availableProblems = allTrackProblems;
    }

    const hasStatements = availableProblems.length > 0;
    const trackNote = hasStatements
      ? null
      : `Your team is registered under "${team.track}". This track supports open innovation — you may formulate your own problem statement aligned with this domain.`;

    return res.status(200).json({
      success: true,
      team: {
        teamName: team.teamName,
        registrationId: team.registrationId,
        track: team.track,
        paymentStatus: team.paymentStatus,
        leaderName: team.leader?.name || "Team Leader",
        participationType: team.participationType || "software",
      },
      participationType: team.participationType || "software",
      hasStatements,
      availableProblems,
      selectedProblem: team.selectedProblemId
        ? {
            problemId: team.selectedProblemId,
            title: team.problemTitle,
          }
        : null,
      trackNote,
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] PS-SELECTION lookup error: ${error.message}`);
    return res.status(500).json({ success: false, message: "Failed to look up team selection." });
  }
};

// @desc    Save a team's problem statement selection (change allowed — last write wins)
// @route   POST /api/ps-selection/select
// @access  Public (registration ID is the participant credential)
export const selectProblem = async (req, res) => {
  try {
    const registrationId = String(req.body?.registrationId || "").trim().toUpperCase();
    const problemId = String(req.body?.problemId || "").trim().toUpperCase();

    if (!registrationId || !problemId) {
      return res.status(400).json({ success: false, message: "registrationId and problemId are required." });
    }

    const team = await Team.findOne({
      registrationId: { $regex: new RegExp(`^${registrationId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i") },
      isDeleted: { $ne: true },
    });

    if (!team) {
      return res.status(404).json({
        success: false,
        message: "No team found for this Registration ID. Double-check your ID from the confirmation email.",
      });
    }

    if (!["PAID", "CASH_PAID", "WAIVED"].includes(team.paymentStatus)) {
      return res.status(403).json({
        success: false,
        message: `Payment status is "${team.paymentStatus}". Only paid/confirmed teams can select a problem statement.`,
      });
    }

    const problem = PROBLEM_STATEMENTS.find((p) => p.id.toUpperCase() === problemId);
    if (!problem) {
      return res.status(400).json({ success: false, message: `Unknown problem statement ID "${problemId}".` });
    }

    if (problem.track !== team.track) {
      return res.status(400).json({
        success: false,
        message: `"${problemId}" belongs to the "${problem.track}" track, but your team is registered under "${team.track}". Choose a statement from your registered track.`,
      });
    }

    team.problemTitle = problem.title;
    team.problemAbstract = problem.title;
    team.selectedProblemId = problem.id;
    team.selectedAt = new Date();
    await team.save();

    return res.status(200).json({
      success: true,
      message: `Successfully selected "${problem.id} — ${problem.title}" for ${team.teamName}.`,
      team: {
        teamName: team.teamName,
        registrationId: team.registrationId,
        track: team.track,
      },
      selectedProblem: { problemId: problem.id, title: problem.title },
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] PS-SELECTION save error: ${error.message}`);
    return res.status(500).json({ success: false, message: "Failed to save problem statement selection." });
  }
};
