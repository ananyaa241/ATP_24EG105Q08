// src/styles/common.js
// Theme: Professional Commercial Palette - Indigo, Violet, Pink, and Slate with premium depth and micro-animations

// --- Layout -------------------------------------------
export const pageBackground = "bg-slate-50 text-slate-900 min-h-screen selection:bg-indigo-200/50 font-sans antialiased";
export const pageWrapper = "max-w-6xl mx-auto px-6 py-16 animate-fade-in-up";
export const section = "mb-16";

// --- Cards --------------------------------------------
export const cardClass =
  "bg-white border border-slate-200/60 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.12)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-sm";

// --- Typography ---------------------------------------
export const pageTitleClass = "text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 animate-fade-in-up";
export const headingClass = "text-4xl font-extrabold text-slate-900 tracking-tight leading-tight";
export const subHeadingClass = "text-xl font-medium text-slate-600 tracking-normal leading-relaxed";
export const bodyText = "text-slate-600 leading-loose text-lg";
export const mutedText = "text-sm text-slate-500 font-medium";
export const linkClass = "text-indigo-600 hover:text-pink-600 font-semibold transition-all duration-300 decoration-2 underline-offset-4 hover:underline";

// --- Buttons ------------------------------------------
export const primaryBtn =
  "bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-500 text-white font-bold px-8 py-3.5 rounded-2xl hover:shadow-[0_10px_25px_-5px_rgba(99,102,241,0.4)] hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer text-sm tracking-widest uppercase flex justify-center items-center gap-2 border border-white/10";
export const secondaryBtn =
  "bg-slate-900 text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 cursor-pointer text-sm tracking-wider uppercase flex justify-center items-center gap-2";
export const ghostBtn = "text-slate-700 font-bold hover:text-indigo-600 hover:bg-indigo-50/50 px-6 py-3 rounded-2xl transition-all duration-300 cursor-pointer text-sm tracking-wider uppercase flex justify-center items-center gap-2";

// --- Forms --------------------------------------------
export const formCard = "bg-white/80 backdrop-blur-xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-slate-200/60 rounded-[2.5rem] p-12 max-w-xl mx-auto animate-fade-in-up";
export const formTitle = "text-4xl font-black text-slate-950 tracking-tight text-center mb-10";
export const labelClass = "text-[11px] font-bold text-slate-500 mb-2.5 block uppercase tracking-[0.15em]";
export const inputClass =
  "w-full bg-slate-50/50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-900 text-base placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 shadow-inner";
export const formGroup = "mb-6";
export const submitBtn =
  "w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 text-white font-black py-4.5 rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1 active:translate-y-0.5 transition-all duration-300 cursor-pointer mt-6 text-sm tracking-[0.2em] uppercase";

// --- Navbar -------------------------------------------
export const navbarClass =
  "bg-white/80 backdrop-blur-2xl border-b border-slate-100 px-10 h-[88px] flex items-center sticky top-0 z-50 shadow-[0_1px_2px_rgba(0,0,0,0.03)]";
export const navContainerClass = "max-w-7xl mx-auto w-full flex items-center justify-between";
export const navBrandClass = "text-3xl font-black text-slate-950 tracking-tighter hover:text-indigo-600 transition-all duration-300 hover:scale-105";
export const navLinksClass = "flex items-center gap-10";
export const navLinkClass = "text-sm font-bold text-slate-600 hover:text-indigo-600 transition-all duration-300 relative group";
export const navLinkActiveClass = "text-sm font-black text-indigo-600 relative after:content-[''] after:absolute after:-bottom-8 after:left-0 after:w-full after:h-1 after:bg-indigo-600 after:rounded-t-full";

// --- Article / Blog -----------------------------------
export const articleGrid = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in";
export const articleCardClass =
  "group bg-white border border-slate-200/50 rounded-[2.5rem] p-8 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.2)] transition-all duration-500 flex flex-col gap-5 cursor-pointer overflow-hidden relative border-b-4 border-b-slate-100 hover:border-b-indigo-400";
export const articleTitle = "text-2xl font-extrabold text-slate-950 leading-tight tracking-tight group-hover:text-indigo-600 transition-colors duration-300";
export const articleExcerpt = "text-base text-slate-600 leading-relaxed line-clamp-3 font-medium";
export const articleMeta = "text-xs text-slate-400 flex items-center gap-3 font-bold tracking-widest uppercase";
export const articleBody = "text-slate-700 leading-relaxed text-lg max-w-3xl font-medium";
export const timestampClass = "text-xs text-slate-400 flex items-center gap-2 font-bold";
export const tagClass = "text-[10px] font-black text-indigo-600 bg-indigo-50/80 px-3 py-1.5 rounded-xl uppercase tracking-[0.1em] w-fit border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300";

// --- Article Page -------------------------------------
export const articlePageWrapper = "max-w-4xl mx-auto px-8 py-20 animate-fade-in-up";
export const articleHeader = "mb-16 flex flex-col gap-6 text-center";
export const articleCategory = "text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600 bg-indigo-50 px-4 py-2 rounded-2xl w-fit mx-auto border border-indigo-100";
export const articleMainTitle = "text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter";
export const articleAuthorRow = "flex items-center justify-between border-y border-slate-100 py-8 text-sm text-slate-600 mt-8";
export const authorInfo = "flex items-center gap-4 font-bold text-slate-900 text-base";
export const articleContent = "text-slate-800 leading-[1.8] text-xl whitespace-pre-line mt-12 font-medium max-w-none";
export const articleFooter = "border-t border-slate-100 mt-20 pt-10 text-sm text-slate-400 flex justify-between items-center font-bold tracking-widest uppercase";

// --- Article Actions -----------------------------
export const articleActions = "flex gap-4 mt-12 flex-wrap justify-center sm:justify-start";
export const editBtn = "bg-slate-900 text-white text-xs font-black px-7 py-3.5 rounded-2xl hover:bg-indigo-600 transition-all duration-300 shadow-lg tracking-widest uppercase";
export const deleteBtn = "bg-rose-500 text-white text-xs font-black px-7 py-3.5 rounded-2xl hover:bg-rose-600 transition-all duration-300 shadow-lg tracking-widest uppercase";

// --- Article Status Badge -------------------------
export const articleStatusActive =
  "absolute top-6 right-6 text-[10px] font-black px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/10 tracking-widest uppercase";
export const articleStatusDeleted =
  "absolute top-6 right-6 text-[10px] font-black px-3 py-1.5 rounded-xl bg-rose-500/10 text-rose-600 border border-rose-500/10 tracking-widest uppercase";

// --- Feedback -----------------------------------------
export const errorClass =
  "bg-rose-50 text-rose-700 border-2 border-rose-100 rounded-2xl px-6 py-5 text-sm font-bold flex items-center gap-3 animate-shake";
export const successClass =
  "bg-emerald-50 text-emerald-700 border-2 border-emerald-100 rounded-2xl px-6 py-5 text-sm font-bold flex items-center gap-3 animate-fade-in";
export const loadingClass = "text-indigo-600 text-sm font-black animate-pulse text-center py-20 flex flex-col items-center gap-4 tracking-widest uppercase";
export const emptyStateClass = "text-center text-slate-400 py-32 text-base font-bold border-2 border-dashed border-slate-200 rounded-[3rem] bg-slate-50/50 animate-fade-in tracking-tight";

// --- Comments ---------------------------------------
export const commentsWrapper = "mt-24 flex flex-col gap-10";
export const commentCard = "bg-white border border-slate-200/50 rounded-[2rem] p-8 transition-all hover:bg-slate-50 shadow-sm border-l-4 border-l-transparent hover:border-l-indigo-400";
export const commentHeader = "flex items-center justify-between mb-4";
export const commentUser = "text-base font-black text-slate-900";
export const commentTime = "text-xs text-slate-400 font-bold uppercase tracking-widest";
export const commentText = "text-slate-700 text-base leading-relaxed font-medium";
export const avatar =
  "w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 text-white flex items-center justify-center text-lg font-black shadow-xl border-2 border-white/20";
export const commentUserRow = "flex items-center gap-5";

// --- Divider ------------------------------------------
export const divider = "border-t-2 border-slate-100 my-16";
