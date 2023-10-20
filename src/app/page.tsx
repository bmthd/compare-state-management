import Link from "next/link";

export default function Home() {
  const className = "text-blue-500 hover:underline";
  return (
    <main className="container flex flex-col items-center justify-center gap-4">
      <Link className={className} href="/recoil">
        Recoil
      </Link>
      <Link className={className} href="/jotai">
        Jotai
      </Link>
      <Link className={className} href="/zustand">
        Zustand
      </Link>
      <Link className={className} href="/redux">
        Redux
      </Link>
    </main>
  );
}
