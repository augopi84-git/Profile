import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-rust-500 flex items-center justify-center font-mono font-bold text-sm text-white">
              GC
            </div>
            <div>
              <div className="text-sm font-bold text-white">Gopinath Chinnakaruppan</div>
              <div className="text-[11px] text-slate-500">
                Senior Manager at Cognizant • ECM Leader • Gen AI & Rust Systems
              </div>
            </div>
          </div>

          {/* Social and cause links */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://www.linkedin.com/in/gopinathchinnakaruppan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/augopi84-git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              GitHub (@augopi84-git)
            </a>
            <a
              href="https://www.earthhour.org/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <span>🌱 Earth Hour Supporter</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors font-mono"
          >
            ↑ Back to Top
          </button>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Gopinath Chinnakaruppan. Built with Remotion & Rust. Hosted on GitHub Pages.
          </div>
          <div className="flex items-center gap-3">
            <span>Remotion Video Engine</span>
            <span>•</span>
            <span>Rust Profile Compiler</span>
            <span>•</span>
            <span>React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
