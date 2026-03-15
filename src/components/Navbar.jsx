import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-12 py-6 bg-white border-b">

      <Link to="/" className="font-bold text-lg">
        Kuntida
      </Link>

      <div className="flex space-x-8 text-sm">

        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>

      </div>

    </nav>
  );
}