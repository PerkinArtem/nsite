import Link from "next/link";

export function Header() {
  return (
    <header className="bg-neutral-800 py-3 shadow-md">
      <div className="container flex items-center">
        <Link href="/" className="text-3xl font-bold">nSite</Link>
        <div className="ml-auto">
          <Link 
            className="flex border-white border-2 py-2 px-4 rounded-md font-medium leading-none transition-transform hover:scale-105"
            href="/auth/login"
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
}