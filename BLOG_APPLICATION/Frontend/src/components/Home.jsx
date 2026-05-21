import { NavLink } from "react-router";
import { primaryBtn, secondaryBtn, pageTitleClass } from "../styles/common";

function Home() {
  return (
    <div className="min-h-[calc(100vh-88px)] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl rounded-[3.5rem] border border-slate-200/50 bg-white/70 backdrop-blur-3xl shadow-[0_50px_100px_-30px_rgba(99,102,241,0.15)] p-16 animate-fade-in-up">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.5em] text-indigo-600 font-black mb-6 animate-fade-in">Professional Blog Studio</p>
          <h1 className={pageTitleClass}>
            Publish stories, grow your audience, and launch a premium media experience.
          </h1>
          <p className="text-slate-600 text-xl leading-[1.8] mb-12 font-medium">
            A modern blogging platform built for authors, creators, and brands who need polished, commercial-grade presentation.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          <NavLink
            to="/register"
            className={primaryBtn}
          >
            Create account
          </NavLink>

          <NavLink
            to="/login"
            className={secondaryBtn + " !bg-white !text-slate-900 border-2 border-slate-100 hover:!border-indigo-400"}
          >
            Sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
