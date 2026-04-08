"use client";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm text-muted">
          © {new Date().getFullYear()} Wasiq Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

