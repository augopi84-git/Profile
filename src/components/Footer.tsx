import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#090a0c] text-zinc-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#16191f] border border-white/[0.1] flex items-center justify-center font-bold text-xs text-white">
              GC
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-200">Gopinath Chinnakaruppan</div>
              <div className="text-[11px] text-zinc-500">
                Senior Manager, Cognizant • ECM Leader • Gen AI & Rust Systems
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-zinc-400">
            <a
              href="https://www.linkedin.com/in/gopinathchinnakaruppan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/augopi84-git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub (@augopi84-git)
            </a>
            <a
              href="https://www.earthhour.org/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Earth Hour
            </a>
          </div>

          {/* Top button */}
          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded bg-[#16191f] hover:bg-[#20242c] text-zinc-400 hover:text-white border border-white/[0.08] transition-colors"
          >
            ↑ Top
          </button>
        </div>

        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600">
          <div>
            © {new Date().getFullYear()} Gopinath Chinnakaruppan. Built with Remotion & Rust. Hosted on GitHub Pages.
          </div>
          <div className="flex items-center gap-3">
            <span>Remotion Video</span>
            <span>•</span>
            <span>Rust Profile Engine</span>
            <span>•</span>
            <span>React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
