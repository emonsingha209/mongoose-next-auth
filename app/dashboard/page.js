"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">JobDes Dashboard</h1>
      {session && (
        <div>
          <p>Welcome, {session.user?.name}</p>
          <p>Email: {session.user?.email}</p>
          <p>User ID: {session.user?.id}</p>
        </div>
      )}
    </div>
  );
}
