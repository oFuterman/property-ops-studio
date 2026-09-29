import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <Image
          src="/images/logo.png"
          alt="Property Ops Studio"
          width={180}
          height={40}
          className="h-9 w-auto opacity-70"
        />
        <p className="text-sm text-slate-400">
          &copy; {year} Property Ops Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
