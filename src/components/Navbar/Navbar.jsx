import "./Navbar.css";
import logo from "../../assets/logo-text.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        {/* Desktop */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 hidden md:flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Dev Stack" className="h-9"/>
          </a>
          <nav className="flex items-center gap-7">
            <a href="#" className="nav-link-active text-sm">Home</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">Technologies</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">Projects</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">About</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-7">
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">Sign In</a>
            <a href="#" className="btn-signup">Sign Up</a>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between px-4 h-16 relative">
          <button
            type="button"
            className="p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
          <a href="#" className="absolute left-1/2 -translate-x-1/2" onClick={closeMenu}>
            <img src={logo} alt="Dev Stack" className="h-8" />
          </a>
          <div className="flex items-center gap-2">
            <a href="#" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">
              Sign In
            </a>
            <a href="#" className="btn-signup !px-3 !py-1.5 !text-xs sm:!px-4 sm:!py-2 sm:!text-sm">
              Sign Up
            </a>
          </div>
        </div>
        <nav
          id="mobile-menu"
          className={`${isMenuOpen ? "flex" : "hidden"} md:hidden flex-col gap-1 px-4 pb-4 pt-2 border-t border-gray-100 bg-white`}
          aria-label="Mobile navigation"
        >
          <a href="#" onClick={closeMenu} className="nav-link-active rounded-lg px-3 py-2 text-sm">
            Home
          </a>
          <a href="#" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            Technologies
          </a>
          <a href="#" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            Projects
          </a>
          <a href="#" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            About
          </a>
          <a href="#" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            Contact
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
