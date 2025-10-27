"use client";
import Link from "next/link";
import Image from "next/image";

export default function MinimalLandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top Bar */}
      <header className="py-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-center items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/clyra_logo.png"
              alt="Clyra Studios"
              width={200}
              height={70}
              className="h-16 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Mini Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center text-gray-400 text-sm">
          © 2025 Clyra Studios · <Link href="/" className="hover:text-white transition-colors">Back to main site</Link>
        </div>
      </footer>
    </div>
  );
}
