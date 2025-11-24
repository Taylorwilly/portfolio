function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3 text-sm">
        <span className="font-semibold tracking-tight">William Motsou</span>
        <div className="flex gap-4">
          <a href="#about" className="hover:text-cyan-400">About </a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400"> Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
