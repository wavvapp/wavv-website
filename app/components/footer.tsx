export function Footer() {
  return (
    <footer className="backdrop-blur-md bg-black/30 border-t border-white/10 text-gray-300">
      <div className="mx-auto px-14 flex h-10 items-center justify-between">
        <p className="text-sm tracking-tight">&copy; 2024 Wavv</p>
        <p className="courser-pointer font-mono">
          <a href="mailto:hello@wavvapp.com">hello@wavvapp.com</a>
        </p>
      </div>
    </footer>
  );
}
