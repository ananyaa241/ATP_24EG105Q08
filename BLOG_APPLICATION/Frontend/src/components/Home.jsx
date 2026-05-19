function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-4xl text-center space-y-8">
        <p className="text-sm uppercase tracking-[0.35em] text-[#0066cc]">Modern blogging made simple</p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-[#111827] tracking-tight leading-tight">
          Welcome to <span className="text-[#0066cc]">MyBlog</span>
        </h1>

        <p className="text-lg text-[#4b5563] leading-relaxed max-w-3xl mx-auto">
          Discover thoughtful articles, share your ideas, and grow with a calm, professional publishing experience. Whether you are a reader, writer, or author, the interface is designed to keep your content front and center.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/" className="inline-flex items-center justify-center rounded-full bg-[#0066cc] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#004499] transition">
            Explore articles
          </a>
          <a href="/register" className="inline-flex items-center justify-center rounded-full border border-[#d2d2d7] bg-white px-6 py-3 text-sm font-semibold text-[#1f2937] hover:bg-[#f8fafc] transition">
            Start writing
          </a>
        </div>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3 w-full max-w-5xl">
        <div className="rounded-[28px] border border-[#e8e8ed] bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0066cc] mb-3">Built for clarity</p>
          <h2 className="text-xl font-semibold text-[#111827] mb-2">Calm, readable layouts</h2>
          <p className="text-sm text-[#4b5563] leading-relaxed">A clean design that highlights your message and keeps readers focused.</p>
        </div>

        <div className="rounded-[28px] border border-[#e8e8ed] bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0066cc] mb-3">Effortless publishing</p>
          <h2 className="text-xl font-semibold text-[#111827] mb-2">Fast, modern workflows</h2>
          <p className="text-sm text-[#4b5563] leading-relaxed">Create, edit, and manage your articles with minimal distractions.</p>
        </div>

        <div className="rounded-[28px] border border-[#e8e8ed] bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0066cc] mb-3">Community ready</p>
          <h2 className="text-xl font-semibold text-[#111827] mb-2">Reader-first experience</h2>
          <p className="text-sm text-[#4b5563] leading-relaxed">A polished interface that encourages engagement and discovery.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
