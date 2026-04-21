import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#121827]/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-[144rem] mx-auto px-6 md:px-20 py-6 md:py-8 flex justify-between items-center">
        <Link href="/" className="text-[2rem] font-medium text-blue-400">
          Portfolio
        </Link>
        <nav className="flex gap-6 md:gap-12">
          <Link href="/" className="text-[1.5rem] text-blue-400 hover:text-blue-300 transition-colors">
            HOME
          </Link>
          <Link href="/portfolio/ec-renewal" className="text-[1.5rem] text-slate-400 hover:text-blue-400 transition-colors">
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}
