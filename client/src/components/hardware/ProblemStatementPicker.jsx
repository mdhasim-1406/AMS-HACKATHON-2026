import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiKey,
  FiCheckCircle,
  FiAlertCircle,
  FiArrowRight,
  FiTarget,
  FiUser,
  FiLayers,
  FiMail,
  FiHash,
  FiCpu,
  FiCode,
  FiInfo,
} from "react-icons/fi";
import { PROBLEM_STATEMENTS } from "../../data/problemStatements";

/**
 * ProblemStatementPicker
 * Identity-first: a visitor enters their team's Registration ID OR leader/member email.
 * On success the parent is told which track the team belongs to so the catalog is
 * constrained to their track only. Teams can view and select official statements for their track.
 */
export default function ProblemStatementPicker({ onIdentify, onClearIdentity, selectedProblemId, onSelectProblemModal }) {
  const [identity, setIdentity] = useState("");
  const [loading, setLoading] = useState(false);
  const [lookupError, setLookupError] = useState("");
  const [teamInfo, setTeamInfo] = useState(null);
  const [available, setAvailable] = useState([]);
  const [selected, setSelected] = useState(null);
  const [trackNote, setTrackNote] = useState(null);
  const [savingId, setSavingId] = useState(null);
  const [saveError, setSaveError] = useState("");
  const [justSaved, setJustSaved] = useState("");

  const isEmailInput = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identity.trim());

  const handleLookup = async (e) => {
    e?.preventDefault();
    const value = identity.trim();
    if (!value) {
      setLookupError("Enter your team's Registration ID (e.g. HV26-XXXXX) or registered email.");
      return;
    }
    setLoading(true);
    setLookupError("");
    setSaveError("");
    setJustSaved("");
    try {
      const res = await fetch(`/api/ps-selection/${encodeURIComponent(value)}`);
      const data = await res.json();
      if (!data.success) {
        setTeamInfo(null);
        setAvailable([]);
        setSelected(null);
        setTrackNote(null);
        setLookupError(data.message || "Lookup failed. Please check your credentials.");
        onClearIdentity?.();
        return;
      }
      setTeamInfo(data.team);
      setTrackNote(data.trackNote || null);
      setSelected(data.selectedProblem || null);
      
      const enrichedProblems = (data.availableProblems || []).map((p) => {
        const full = PROBLEM_STATEMENTS.find((s) => s.id === p.id) || {};
        return { ...p, ...full };
      });
      setAvailable(enrichedProblems);

      // Tell parent page to constrain view to this team's track & type
      onIdentify?.({
        track: data.team.track,
        teamName: data.team.teamName,
        registrationId: data.team.registrationId,
        participationType: data.team.participationType,
        hasStatements: enrichedProblems.length > 0,
        selectedProblemId: data.selectedProblem?.problemId || null,
      });
    } catch (err) {
      setLookupError("Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = async (problem) => {
    if (!teamInfo?.registrationId) {
      setSaveError("Missing registration ID — please verify your team first.");
      return;
    }
    setSavingId(problem.id);
    setSaveError("");
    setJustSaved("");
    try {
      const res = await fetch("/api/ps-selection/select", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          registrationId: teamInfo.registrationId,
          problemId: problem.id,
        }),
      });
      const data = await res.json();
      if (!data.success) {
        setSaveError(data.message || "Selection failed. Try again.");
        return;
      }
      setSelected(data.selectedProblem);
      setJustSaved(data.message || `Selected ${problem.id} for ${teamInfo.teamName}.`);
    } catch (err) {
      setSaveError("Network error while saving selection. Try again.");
    } finally {
      setSavingId(null);
    }
  };

  const handleClear = () => {
    setTeamInfo(null);
    setAvailable([]);
    setSelected(null);
    setTrackNote(null);
    setIdentity("");
    setLookupError("");
    setSaveError("");
    setJustSaved("");
    onClearIdentity?.();
  };

  return (
    <div className="glass-card p-6 sm:p-7 rounded-3xl border border-amber-500/30 bg-[#0c142e]/85 backdrop-blur-xl shadow-2xl space-y-5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/20">
            <FiTarget size={22} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold font-['Space_Grotesk'] text-white flex items-center gap-2">
              Team Track Selection & Verification
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Live Portal
              </span>
            </h3>
            <p className="text-xs text-gray-400">
              Enter your <strong className="text-amber-300">Registration ID</strong> or <strong className="text-amber-300">registered email</strong> to lock into your chosen track&apos;s problem statements.
            </p>
          </div>
        </div>
      </div>

      {/* Lookup Form */}
      {!teamInfo ? (
        <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-3 relative z-10">
          <div className="relative flex-1">
            {isEmailInput ? (
              <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400" />
            ) : (
              <FiKey className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400" />
            )}
            <input
              type="text"
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
              placeholder="e.g. HV26-A1092 or leader@gmail.com"
              className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-amber-400 text-white placeholder-gray-500 text-sm font-mono focus:outline-none transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Verifying...
              </span>
            ) : (
              <>
                <FiArrowRight size={15} /> Verify & Unlock Track
              </>
            )}
          </button>
        </form>
      ) : null}

      {lookupError && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-rose-400 font-semibold flex items-center gap-1.5"
        >
          <FiAlertCircle /> {lookupError}
        </motion.p>
      )}

      {/* Identified Team Dashboard */}
      <AnimatePresence>
        {teamInfo && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5 relative z-10"
          >
            {/* Team Badges Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-200 font-bold flex items-center gap-1.5">
                  <FiUser className="text-amber-400" /> {teamInfo.teamName}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-mono font-semibold flex items-center gap-1.5">
                  <FiHash className="text-amber-400" /> {teamInfo.registrationId}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-semibold flex items-center gap-1.5">
                  <FiLayers className="text-cyan-400" /> {teamInfo.track}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/25 text-purple-300 font-semibold flex items-center gap-1.5 uppercase text-[10px] tracking-wider">
                  {teamInfo.participationType === "hardware" ? <FiCpu className="text-purple-400" /> : <FiCode className="text-purple-400" />}
                  {teamInfo.participationType || "Software"} Track
                </span>
              </div>

              <button
                type="button"
                onClick={handleClear}
                className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-gray-300 hover:text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Switch Team / Exit Track Lock
              </button>
            </div>

            {/* Current Selection Banner */}
            {selected && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200 flex items-start gap-3 shadow-lg">
                <FiCheckCircle className="text-emerald-400 text-lg mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <p className="font-bold uppercase tracking-wider text-emerald-300 text-[11px]">
                    Confirmed Selected Problem Statement
                  </p>
                  <p className="text-sm font-semibold text-white">
                    <span className="font-mono font-bold text-emerald-400">{selected.problemId}</span> — {selected.title}
                  </p>
                </div>
              </div>
            )}

            {justSaved && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-emerald-300 font-semibold flex items-center gap-1.5 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/30"
              >
                <FiCheckCircle /> {justSaved}
              </motion.p>
            )}

            {saveError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-rose-400 font-semibold flex items-center gap-1.5 bg-rose-500/10 p-3 rounded-xl border border-rose-500/30"
              >
                <FiAlertCircle /> {saveError}
              </motion.p>
            )}

            {/* Track Note (for Open Innovation or no predefined statements) */}
            {trackNote && (
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-xs text-cyan-200 flex items-start gap-2.5">
                <FiInfo className="text-cyan-400 text-base mt-0.5 shrink-0" />
                <span>{trackNote}</span>
              </div>
            )}

            {/* Available Problem Statements for Track */}
            {available.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-400 font-['Space_Grotesk']">
                    {available.length} Official Statement{available.length === 1 ? "" : "s"} Available for {teamInfo.track}
                  </p>
                  <span className="text-[11px] text-gray-400">Click any card to select or click &quot;View Full Brief&quot; for complete specs</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                  {available.map((problem) => {
                    const isCurrent = selected?.problemId === problem.id;
                    return (
                      <div
                        key={problem.id}
                        className={`p-4 rounded-2xl border transition-all ${
                          isCurrent
                            ? "bg-emerald-500/15 border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                            : "bg-white/5 border-white/10 hover:border-amber-500/40 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-xs text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                              {problem.id}
                            </span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/5">
                              {problem.category || "Software"}
                            </span>
                          </div>
                          {isCurrent ? (
                            <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                              <FiCheckCircle size={11} /> Selected
                            </span>
                          ) : null}
                        </div>

                        <h4 className="text-sm font-bold text-white mt-2 leading-snug">
                          {problem.title}
                        </h4>

                        <p className="text-xs text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">
                          {problem.summary || problem.pain || problem.context}
                        </p>

                        <div className="flex items-center justify-between gap-2 mt-3 pt-3 border-t border-white/5">
                          <button
                            type="button"
                            onClick={() => onSelectProblemModal?.(problem)}
                            className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer transition-colors"
                          >
                            View Full Brief →
                          </button>

                          {!isCurrent ? (
                            <button
                              type="button"
                              onClick={() => handleSelect(problem)}
                              disabled={savingId === problem.id}
                              className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer disabled:opacity-50"
                            >
                              {savingId === problem.id ? "Saving..." : "Select Statement"}
                            </button>
                          ) : (
                            <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                              <FiCheckCircle size={12} /> Active Choice
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
