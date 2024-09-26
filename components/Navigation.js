"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navigation() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/" className="text-white font-bold">
            JobDes
          </Link>
        </li>
        <li>
          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-white text-blue-500 px-4 py-2 rounded"
            >
              Sign Out
            </button>
          ) : (
            <Link href="/login" className="text-white">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
