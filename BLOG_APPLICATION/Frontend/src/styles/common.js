// src/styles/common.js
// Theme: Premium Commercial Dark — Deep backgrounds, glassmorphism, dynamic gradients, micro-animations

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-slate-900 min-h-screen text-slate-200 selection:bg-indigo-500/30 font-sans";
export const pageWrapper = "max-w-5xl mx-auto px-6 py-16 animate-[fadeIn_0.5s_ease-out]";
export const section = "mb-14";

// ─── Cards ────────────────────────────────────────────
export const cardClass =
  "bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer";

// ─── Typography ───────────────────────────────────────
export const pageTitleClass = "text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-tight leading-tight mb-4 animate-[fadeInUp_0.5s_ease-out]";
export const headingClass = "text-2xl font-bold text-slate-100 tracking-tight";
export const subHeadingClass = "text-lg font-semibold text-slate-200 tracking-tight";
export const bodyText = "text-slate-400 leading-relaxed";
export const mutedText = "text-sm text-slate-500";
export const linkClass = "text-indigo-400 hover:text-indigo-300 hover:underline transition-colors duration-200";

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn =
  "bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer text-sm tracking-wide flex justify-center items-center";
export const secondaryBtn =
  "bg-slate-800 border border-slate-700 text-slate-200 font-medium px-6 py-2.5 rounded-full hover:bg-slate-700 hover:border-slate-600 transition-all duration-200 cursor-pointer text-sm hover:shadow-md flex justify-center items-center";
export const ghostBtn = "text-indigo-400 font-medium hover:text-indigo-300 hover:bg-indigo-500/10 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer text-sm flex justify-center items-center";

// ─── Forms ────────────────────────────────────────────
export const formCard = "bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 max-w-xl mx-auto shadow-2xl shadow-black/50 animate-[fadeInUp_0.5s_ease-out]";
export const formTitle = "text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 tracking-tight text-center mb-8";
export const labelClass = "text-xs font-semibold text-slate-400 mb-2 block uppercase tracking-wider";
export const inputClass =
  "w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300";
export const formGroup = "mb-5";
export const submitBtn =
  "w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer mt-4 text-sm tracking-wide";

// ─── Navbar ───────────────────────────────────────────
export const navbarClass =
  "bg-slate-900/80 backdrop-blur-2xl border-b border-slate-800/80 px-8 h-[72px] flex items-center sticky top-0 z-50 shadow-sm shadow-black/20";
export const navContainerClass = "max-w-5xl mx-auto w-full flex items-center justify-between";
export const navBrandClass = "text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 tracking-tighter hover:opacity-80 transition-opacity";
export const navLinksClass = "flex items-center gap-8";
export const navLinkClass = "text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors duration-200 relative group";
export const navLinkActiveClass = "text-sm font-semibold text-indigo-400 relative after:content-[''] after:absolute after:-bottom-6 after:left-0 after:w-full after:h-0.5 after:bg-indigo-400";

// ─── Article / Blog ───────────────────────────────────
export const articleGrid = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-[fadeIn_0.7s_ease-out]";
export const articleCardClass =
  "group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-7 hover:-translate-y-2 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col gap-3 cursor-pointer overflow-hidden relative";
export const articleTitle = "text-xl font-bold text-slate-100 leading-snug tracking-tight group-hover:text-indigo-300 transition-colors";
export const articleExcerpt = "text-sm text-slate-400 leading-relaxed line-clamp-3";
export const articleMeta = "text-xs text-slate-500 flex items-center gap-2";
export const articleBody = "text-slate-300 leading-relaxed text-base max-w-2xl";
export const timestampClass = "text-xs text-slate-500 flex items-center gap-1.5";
export const tagClass = "text-[0.65rem] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md uppercase tracking-wider w-fit";

// ─── Article Page ─────────────────────────────────────
export const articlePageWrapper = "max-w-3xl mx-auto px-6 py-16 animate-[fadeInUp_0.5s_ease-out]";
export const articleHeader = "mb-12 flex flex-col gap-5";
export const articleCategory = "text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-full w-fit";
export const articleMainTitle = "text-5xl font-extrabold text-slate-100 leading-tight tracking-tight";
export const articleAuthorRow =
  "flex items-center justify-between border-t border-b border-slate-800 py-5 text-sm text-slate-400 mt-4";
export const authorInfo = "flex items-center gap-3 font-semibold text-slate-200";
export const articleContent = "text-slate-300 leading-loose text-lg whitespace-pre-line mt-10 font-serif";
export const articleFooter = "border-t border-slate-800 mt-16 pt-8 text-sm text-slate-500 flex justify-between items-center";

// ─── Article Actions ─────────────────────────────
export const articleActions = "flex gap-3 mt-8";
export const editBtn = "bg-slate-800 text-indigo-400 border border-indigo-500/30 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-indigo-500/25";
export const deleteBtn = "bg-slate-800 text-rose-400 border border-rose-500/30 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-rose-500/25";

// ─── Article Status Badge ─────────────────────────
export const articleStatusActive =
  "absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/20";
export const articleStatusDeleted =
  "absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/20";

// ─── Feedback ─────────────────────────────────────────
export const errorClass =
  "bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-xl px-5 py-4 text-sm font-medium flex items-center gap-2 animate-[shake_0.5s_ease-in-out]";
export const successClass =
  "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl px-5 py-4 text-sm font-medium flex items-center gap-2 animate-[fadeIn_0.5s_ease-out]";
export const loadingClass = "text-indigo-400 text-sm font-medium animate-pulse text-center py-12 flex flex-col items-center gap-3";
export const emptyStateClass = "text-center text-slate-500 py-20 text-sm font-medium border border-dashed border-slate-700 rounded-2xl bg-slate-800/20 animate-[fadeIn_0.5s_ease-out]";

// ─── Comments ───────────────────────────────────────
export const commentsWrapper = "mt-16 flex flex-col gap-6";
export const commentCard = "bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 transition-all hover:bg-slate-800/50 hover:border-slate-600/50 animate-[fadeInUp_0.5s_ease-out]";
export const commentHeader = "flex items-center justify-between mb-3";
export const commentUser = "text-sm font-bold text-slate-200";
export const commentTime = "text-xs text-slate-500";
export const commentText = "text-slate-300 text-sm leading-relaxed";
export const avatar =
  "w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center text-sm font-bold shadow-md";
export const commentUserRow = "flex items-center gap-4";

// ─── Divider ──────────────────────────────────────────
export const divider = "border-t border-slate-800 my-12";
