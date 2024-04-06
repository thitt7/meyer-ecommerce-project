import type { Metadata } from "next";
import Providers from "./providers";
import { Inter } from "next/font/google";
import '@styles/globals.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hire Me Meyer",
  description: "you know you want to",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
