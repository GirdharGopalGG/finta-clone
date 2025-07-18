import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 md:px-10 bg-white shadow-sm fixed top-0 z-50">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="Finta Logo" className="h-7" />
        Finta
      </div>

      <ul className="hidden md:flex gap-6 font-medium text-gray-700">
        <li><a href="#" className="hover:text-black">Features</a></li>
        <li><a href="#" className="hover:text-black">Pricing</a></li>
        <li><a href="#" className="hover:text-black">Blog</a></li>
      </ul>

      <div className="hidden md:flex gap-3">
        <button className="text-sm font-medium text-gray-700 hover:text-black">Log in</button>
        <button className="text-sm font-medium bg-black text-white px-4 py-2 rounded-md hover:opacity-90">
          Get Started
        </button>
      </div>

      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden">
          <a href="#" className="py-2">Features</a>
          <a href="#" className="py-2">Pricing</a>
          <a href="#" className="py-2">Blog</a>
          <a href="#" className="py-2">Log in</a>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded-md">Get Started</button>
        </div>
      )}
    </nav>
  );
}
