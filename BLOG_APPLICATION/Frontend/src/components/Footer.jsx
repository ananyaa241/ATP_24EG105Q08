import React from "react";

function Footer() {
  return (
    <footer className="border-t border-[#e8e8ed] bg-white/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-[#6e6e73]">
        <p>© 2026 MyBlog. Built for thoughtful reading and confident writing.</p>
        <p className="text-[#0066cc]">Clean interface · calm typography · modern layout</p>
      </div>
    </footer>
  );
}

export default Footer;
