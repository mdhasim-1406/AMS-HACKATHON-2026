import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiSearch,
  FiX,
  FiCheck,
  FiCopy,
  FiCpu,
  FiShield,
  FiActivity,
  FiSun,
  FiBookOpen,
  FiTruck,
  FiDollarSign,
  FiGlobe,
  FiAlertTriangle,
  FiCode,
  FiInfo,
  FiAward,
  FiCheckCircle,
  FiZap,
  FiLock,
  FiLayers,
  FiTarget,
  FiAlertCircle,
} from "react-icons/fi";
import { PROBLEM_STATEMENTS } from "../data/problemStatements";
import ProblemStatementPicker from "../components/hardware/ProblemStatementPicker";

const TRACKS_LIST = [
  "All Tracks",
  "AI & Machine Learning",
  "Cyber Security",
  "Healthcare",
  "Agriculture",
  "Smart Education",
  "Smart Mobility",
  "Smart Automation",
  "FinTech",
  "Sustainability",
  "Disaster Management",
  "Quantum Computing",
  "Open Innovation",
];

const TRACK_ICONS = {
  "AI & Machine Learning": FiCpu,
  "Cyber Security": FiShield,
  "Healthcare": FiActivity,
  "Agriculture": FiSun,
  "Smart Education": FiBookOpen,
  "Smart Mobility": FiTruck,
  "Smart Automation": FiZap,
  "FinTech": FiDollarSign,
  "Sustainability": FiGlobe,
  "Disaster Management": FiAlertTriangle,
  "Quantum Computing": FiCpu,
  "Open Innovation": FiLayers,
};

function HardwareProblems() {
  const [searchParams] = useSearchParams();
  const queryTrack = searchParams.get("track");

  // Team Identity Lock: once a team verifies, catalog is strictly constrained to their track
  const [identified, setIdentified] = useState(null);

  const handleIdentify = (info) => setIdentified(info);
  const handleClearIdentity = () => setIdentified(null);

  // Filters State
  const [selectedTrack, setSelectedTrack] = useState(() => {
    if (queryTrack && TRACKS_LIST.includes(queryTrack)) {
      return queryTrack;
    }
    return "All Tracks";
  });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Sync state if URL query param changes
  useEffect(() => {
    if (queryTrack && TRACKS_LIST.includes(queryTrack)) {
      setSelectedTrack(queryTrack);
    }
  }, [queryTrack]);

  // If identified, sync selected track to team track
  useEffect(() => {
    if (identified?.track) {
      setSelectedTrack(identified.track);
    }
  }, [identified]);

  // Filtered Problem Statements
  const filteredProblems = useMemo(() => {
    return PROBLEM_STATEMENTS.filter((ps) => {
      // 1. Identity-first track lock: once identified, show ONLY the team's own track & participation type
      if (identified?.track) {
        if (ps.track !== identified.track) {
          return false;
        }
        if (identified.participationType) {
          const teamType = identified.participationType.toLowerCase();
          const psCat = (ps.category || "Software").toLowerCase();
          if (teamType === "hardware" && psCat !== "hardware" && psCat !== "dual track") {
            return false;
          }
          if (teamType === "software" && psCat !== "software" && psCat !== "dual track") {
            return false;
          }
        }
      }

      // 2. Public Track Filter (when not identified)
      if (!identified && selectedTrack !== "All Tracks" && ps.track !== selectedTrack) {
        return false;
      }

      // 3. Category Filter (when not identified)
      if (!identified && selectedCategory !== "All") {
        if (selectedCategory === "Hardware" && ps.category !== "Hardware" && ps.category !== "Dual Track") {
          return false;
        }
        if (selectedCategory === "Software" && ps.category !== "Software" && ps.category !== "Dual Track") {
          return false;
        }
        if (selectedCategory === "Dual Track" && ps.category !== "Dual Track") {
          return false;
        }
      }

      // 4. Search Query Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesId = ps.id.toLowerCase().includes(query);
        const matchesTitle = ps.title.toLowerCase().includes(query);
        const matchesTrack = ps.track.toLowerCase().includes(query);
        const matchesSummary = (ps.summary || "").toLowerCase().includes(query);
        const matchesContext = (ps.context || "").toLowerCase().includes(query);
        const matchesSolution = (ps.expectedSolution || "").toLowerCase().includes(query);
        const matchesTech = (ps.techStack || []).some((t) => t.toLowerCase().includes(query));
        return matchesId || matchesTitle || matchesTrack || matchesSummary || matchesContext || matchesSolution || matchesTech;
      }

      return true;
    });
  }, [selectedTrack, selectedCategory, searchQuery, identified]);

  const handleCopyId = (id, e) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Counts
  const totalSoftware = useMemo(() => PROBLEM_STATEMENTS.filter((p) => p.category === "Software").length, []);
  const totalHardware = useMemo(() => PROBLEM_STATEMENTS.filter((p) => p.category === "Hardware").length, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1.5">
            <Link
              to="/#tracks"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider font-['Space_Grotesk'] mb-1"
            >
              <FiArrowLeft /> Back to Hackathon Tracks
            </Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white">
              Official <span className="text-gradient-cyan-purple">Problem Statements</span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-2xl">
              Official challenge statements across 12 innovation domains for both Software ({totalSoftware}) and Hardware ({totalHardware}) tracks.
            </p>
          </div>

          {/* Quick Stats Chips */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-['Space_Grotesk']">
              {PROBLEM_STATEMENTS.length} Total Challenges
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold font-['Space_Grotesk']">
              {totalSoftware} Software
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold font-['Space_Grotesk']">
              {totalHardware} Hardware
            </span>
          </div>
        </div>

        {/* Team Identity Picker & Track Lock */}
        <ProblemStatementPicker
          onIdentify={handleIdentify}
          onClearIdentity={handleClearIdentity}
          onSelectProblemModal={(p) => setSelectedProblem(p)}
        />

        {/* Track-Locked Notification Banner */}
        {identified && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-cyan-500/15 to-purple-500/15 border border-amber-500/40 text-xs text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300">
                <FiLock size={16} />
              </div>
              <div>
                <p className="font-bold text-white text-sm">
                  Track-Locked View: <span className="text-cyan-300">{identified.track}</span>
                </p>
                <p className="text-gray-300 text-xs">
                  Showing statements tailored for <strong className="text-white">{identified.teamName}</strong> ({identified.participationType || "software"} track).
                </p>
              </div>
            </div>

            <button
              onClick={handleClearIdentity}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Unlock / Browse All
            </button>
          </motion.div>
        )}

        {/* Search & Filter Bar */}
        <div className="glass-card p-5 sm:p-6 rounded-3xl border border-white/10 space-y-4 bg-[#0b1329]/70 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by PS Code (e.g. ML-01, PS-SUS-01), title, track, or technology..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-500 text-white placeholder-gray-400 text-sm focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FiX size={16} />
                </button>
              )}
            </div>

            {/* Category Selector Tabs (hidden when identified) */}
            {!identified && (
              <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
                {["All", "Software", "Hardware"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold font-['Space_Grotesk'] tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                        : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {cat} {cat === "All" ? `(${PROBLEM_STATEMENTS.length})` : cat === "Software" ? `(${totalSoftware})` : `(${totalHardware})`}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Track Filter Pills (hidden when identified) */}
          {!identified && (
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {TRACKS_LIST.map((track) => {
                const isSelected = selectedTrack === track;
                const count =
                  track === "All Tracks"
                    ? PROBLEM_STATEMENTS.length
                    : PROBLEM_STATEMENTS.filter((p) => p.track === track).length;

                return (
                  <button
                    key={track}
                    onClick={() => setSelectedTrack(track)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? "bg-purple-600/30 text-purple-200 border border-purple-500/50 shadow-md"
                        : "bg-white/5 text-gray-400 hover:text-gray-200 border border-transparent hover:border-white/10"
                    }`}
                  >
                    {track}
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-purple-500/30 text-white" : "bg-white/10 text-gray-400"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Problem Statements Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-gray-400 px-1">
            <span>
              Showing <strong className="text-white">{filteredProblems.length}</strong> matching problem statement{filteredProblems.length === 1 ? "" : "s"}
            </span>
            {selectedTrack !== "All Tracks" && (
              <span className="text-cyan-400 font-semibold">Track: {selectedTrack}</span>
            )}
          </div>

          {filteredProblems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProblems.map((ps) => {
                const IconComponent = TRACK_ICONS[ps.track] || FiLayers;
                const isSoftware = ps.category === "Software";

                return (
                  <motion.div
                    key={ps.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    onClick={() => setSelectedProblem(ps)}
                    className="glass-card p-6 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer relative group bg-[#0c142e]/70 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="space-y-4">
                      {/* Card Badges Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="px-2.5 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono font-bold text-xs">
                            {ps.id}
                          </span>
                          <span
                            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] uppercase tracking-wider ${
                              isSoftware
                                ? "bg-purple-500/15 text-purple-300 border border-purple-500/30"
                                : "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                            }`}
                          >
                            {ps.category}
                          </span>
                          <span className="px-2 py-1 rounded-lg bg-white/5 text-gray-300 font-medium text-[11px]">
                            {ps.difficulty}
                          </span>
                        </div>

                        <button
                          onClick={(e) => handleCopyId(ps.id, e)}
                          title="Copy Statement ID"
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                          {copiedId === ps.id ? <FiCheck className="text-emerald-400" size={14} /> : <FiCopy size={14} />}
                        </button>
                      </div>

                      {/* Track Indicator */}
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold font-['Space_Grotesk']">
                        <IconComponent size={14} />
                        <span>{ps.track}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white group-hover:text-cyan-300 transition-colors leading-snug line-clamp-2">
                        {ps.title}
                      </h3>

                      {/* Problem Summary / Pain */}
                      <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 font-light">
                        {ps.summary || ps.context}
                      </p>

                      {/* Deliverables / Scope Preview */}
                      {ps.deliverables && ps.deliverables.length > 0 && (
                        <div className="space-y-1.5 pt-2 border-t border-white/5">
                          <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                            Key Deliverables ({ps.deliverables.length}):
                          </p>
                          <ul className="space-y-1 text-xs text-gray-300">
                            {ps.deliverables.slice(0, 2).map((del, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                                <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                                <span className="truncate">{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Card Footer: Tech Stack Tags & CTA */}
                    <div className="space-y-3 pt-4 border-t border-white/10 mt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {(ps.techStack || []).slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-white/5 text-gray-300 text-[10px] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {(ps.techStack || []).length > 3 && (
                          <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-gray-400 text-[10px] font-mono">
                            +{ps.techStack.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 pt-1">
                        <span>View Full Challenge Brief</span>
                        <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="glass-card p-12 rounded-3xl border border-white/10 text-center space-y-4 max-w-lg mx-auto my-12 bg-[#0c142e]/60">
              <FiSearch size={40} className="mx-auto text-gray-500" />
              <h3 className="text-lg font-bold text-white">No Problem Statements Found</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {identified
                  ? `There are no pre-defined statements matching your current filters for the ${identified.track} track. You can formulate an open proposal within this domain.`
                  : "No problem statements matched your search criteria. Try clearing filters or searching for different keywords."}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  if (!identified) setSelectedTrack("All Tracks");
                }}
                className="px-5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Detailed Modal for Problem Statement */}
        <AnimatePresence>
          {selectedProblem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProblem(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card max-w-3xl w-full p-6 sm:p-8 rounded-3xl border border-cyan-500/40 relative overflow-hidden shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto bg-[#070c20]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProblem(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  <FiX size={20} />
                </button>

                {/* Header Section */}
                <div className="space-y-3 border-b border-white/10 pb-5 pr-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-xs">
                      {selectedProblem.id}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white font-bold text-xs font-['Space_Grotesk']">
                      {selectedProblem.track}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-lg font-bold text-xs font-['Space_Grotesk'] ${
                        selectedProblem.category === "Software"
                          ? "bg-purple-500/20 text-purple-300"
                          : "bg-amber-500/20 text-amber-300"
                      }`}
                    >
                      {selectedProblem.category} Track
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 font-bold text-xs font-['Space_Grotesk']">
                      {selectedProblem.difficulty}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white leading-tight">
                    {selectedProblem.title}
                  </h2>
                </div>

                {/* Body Content */}
                <div className="space-y-6 text-sm text-gray-300 font-light leading-relaxed">
                  {/* Context & Background */}
                  {selectedProblem.context && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-['Space_Grotesk'] flex items-center gap-1.5">
                        <FiInfo /> Why This Problem Matters / Industry & Real-World Context
                      </h4>
                      <p className="bg-white/5 p-4 rounded-2xl border border-white/10 text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {selectedProblem.context}
                      </p>
                    </div>
                  )}

                  {/* Summary / Problem Pain */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-['Space_Grotesk'] flex items-center gap-1.5">
                      <FiZap /> Evident Problem Pain Point
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-200">
                      {selectedProblem.summary}
                    </p>
                  </div>

                  {/* Expected Solution / Approach */}
                  {selectedProblem.expectedSolution && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-['Space_Grotesk'] flex items-center gap-1.5">
                        <FiTarget /> Expected Solution & Architecture Approach
                      </h4>
                      <p className="bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/20 text-xs sm:text-sm text-emerald-100 leading-relaxed">
                        {selectedProblem.expectedSolution}
                      </p>
                    </div>
                  )}

                  {/* Expected Deliverables */}
                  {selectedProblem.deliverables && selectedProblem.deliverables.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 font-['Space_Grotesk'] flex items-center gap-1.5">
                        <FiCheckCircle /> Expected Solution Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedProblem.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 flex items-start gap-2.5"
                          >
                            <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Constraints */}
                  {selectedProblem.constraints && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 font-['Space_Grotesk'] flex items-center gap-1.5">
                        <FiAlertCircle /> Key Constraints & Requirements
                      </h4>
                      <p className="bg-rose-500/5 p-3.5 rounded-2xl border border-rose-500/20 text-xs text-rose-200 leading-relaxed">
                        {selectedProblem.constraints}
                      </p>
                    </div>
                  )}

                  {/* Bonus */}
                  {selectedProblem.bonus && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 font-['Space_Grotesk'] flex items-center gap-1.5">
                        <FiAward /> Bonus Stretch Goals & Technical Frontiers
                      </h4>
                      <p className="bg-amber-500/10 p-3.5 rounded-2xl border border-amber-500/25 text-xs text-amber-100 leading-relaxed">
                        {selectedProblem.bonus}
                      </p>
                    </div>
                  )}

                  {/* Evaluation Criteria */}
                  {selectedProblem.evaluation && selectedProblem.evaluation.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 font-['Space_Grotesk'] flex items-center gap-1.5">
                        <FiAward /> Evaluation & Scoring Matrix
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedProblem.evaluation.map((evalItem, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200"
                          >
                            {evalItem}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Suggested Tech Stack */}
                  {selectedProblem.techStack && selectedProblem.techStack.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 font-['Space_Grotesk'] flex items-center gap-1.5">
                        <FiCode /> Suggested Tech Stack & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProblem.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-xl bg-white/10 border border-white/10 text-xs font-mono text-cyan-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={(e) => handleCopyId(selectedProblem.id, e)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-semibold font-['Space_Grotesk'] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {copiedId === selectedProblem.id ? (
                      <>
                        <FiCheck className="text-emerald-400" /> Copied Problem ID
                      </>
                    ) : (
                      <>
                        <FiCopy /> Copy Problem ID ({selectedProblem.id})
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedProblem(null)}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HardwareProblems;
