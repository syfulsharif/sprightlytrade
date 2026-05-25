export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-white font-display text-lg font-medium tracking-tight">
        Sprightly Trade International
      </div>
      
      <div className="flex gap-6 text-xs text-neutral-500 uppercase tracking-widest font-medium">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
      </div>

      <div className="text-xs text-neutral-600">
        &copy; {new Date().getFullYear()} Sprightly Trade International.
      </div>
    </footer>
  );
}
