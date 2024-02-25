"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-zinc-700">
      <Button onClick={() => router.push("/admin")}>Go to admin page</Button>
    </div>
  );
}
