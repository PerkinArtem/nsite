import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-800 py-2">
      <div className="container">
        <div className="flex justify-end text-sm">
          Developed by 
          <a 
          href="https://github.com/PerkinArtem" 
          target="_blank"
          className="text-emerald-400"
          >
            &nbsp;a.pe
          </a>
        </div>
      </div>
    </footer>
  );
}