"use client";

import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between h-12">
          <div className="flex w-full justify-center">
            <div className="flex space-x-8">
              <Link
                href="#features"
                className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 border-b-2 text-sm font-mono tracking-tight transition-colors"
              >
                {">"}features
              </Link>
              <Link
                href="#how-it-works"
                className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 border-b-2 text-sm font-mono tracking-tight transition-colors"
              >
                {">"}how_it_works
              </Link>
              <Link
                href="#download_link"
                className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 border-b-2 text-sm font-mono tracking-tight transition-colors"
              >
                {">"}download
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
