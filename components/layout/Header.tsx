import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#121827]/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-[1440px] mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-medium text-blue-400">
          Portfolio
        </Link>
        <nav className="flex gap-8">
          <Link href="/" className="text-[15px] text-blue-400 hover:text-blue-300 transition-colors">
            HOME
          </Link>
          <Link href="/portfolio/ec-renewal" className="text-[15px] text-slate-400 hover:text-blue-400 transition-colors">
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}
