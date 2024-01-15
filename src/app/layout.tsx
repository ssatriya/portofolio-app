import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio App",
  description: "Simple portofolio App using LocalStorage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <main className="flex items-center justify-center w-full">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
