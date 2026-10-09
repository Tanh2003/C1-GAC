export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-md bg-white/5">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-500/25">
              G
            </div>
            <span className="text-xl font-bold tracking-tight">C1-GAC</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Tính năng</a>
            <a href="#about" className="hover:text-white transition-colors">Giới thiệu</a>
            <a href="#contact" className="hover:text-white transition-colors">Liên hệ</a>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/10"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Đang phát triển
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Chào mừng đến với
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                C1-GAC
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Ứng dụng được xây dựng với Next.js, TypeScript và Tailwind CSS.
              <br />
              Sẵn sàng để phát triển và triển khai.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#features"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all"
              >
                Khám phá ngay
              </a>
              <a
                href="#about"
                className="px-8 py-3 rounded-xl border border-white/15 text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all"
              >
                Tìm hiểu thêm →
              </a>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <section id="features" className="mt-32 w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-12">Tính năng nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "Nhanh chóng",
                desc: "Được tối ưu với Next.js App Router và Turbopack cho hiệu suất tối đa.",
              },
              {
                icon: "🛡️",
                title: "An toàn",
                desc: "TypeScript strict mode đảm bảo code chất lượng và ít bug hơn.",
              },
              {
                icon: "🎨",
                title: "Đẹp mắt",
                desc: "Tailwind CSS v4 giúp xây dựng giao diện hiện đại, responsive.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-32">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 C1-GAC. All rights reserved.</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Next.js
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
