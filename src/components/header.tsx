import Link from "next/link";
export default function Header() {
  return (
    <div className="w-full absolute text-black z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bond text-3xl">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/board">board</Link>
          <Link href="/chat">chat</Link>
          <Link href="/editor">editor</Link>
          <Link href="/login">login</Link>
        </div>
      </nav>
    </div>
  );
}
