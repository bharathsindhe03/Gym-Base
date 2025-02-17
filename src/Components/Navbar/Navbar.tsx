import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/classes", label: "Classes" },
    { path: "/trainer", label: "Trainer" },
    { path: "/shop", label: "Shop" },
    { path: "/blob", label: "Blob" },
  ];

  return (
    <nav className="bg-black p-4 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Brand Logo"
            className="w-24 h-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-white text-lg px-4 py-2 rounded transition-all ${
                location.pathname === link.path
                  ? "bg-blue-600 font-bold"
                  : "hover:bg-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-white text-lg px-4 py-2 w-full text-center ${
                location.pathname === link.path
                  ? "bg-blue-600 font-bold"
                  : "hover:bg-blue-600"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
