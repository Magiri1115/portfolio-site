import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0f1419] px-8 py-16 mt-16 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-medium text-blue-400 mb-4">Portfolio</h3>
            <p className="text-sm text-slate-500 max-w-xs">
              テクノロジーとデザインで、課題を解決します
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-medium text-slate-200">Navigation</h4>
            <Link href="/" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">HOME</Link>
            <Link href="/portfolio/ec-renewal" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Portfolio</Link>
            <Link href="#contact" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-medium text-slate-200">Connect</h4>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 Portfolio. All rights reserved.</p>
          <p>Built with TypeScript & Vercel</p>
        </div>
      </div>
    </footer>
  );
}
