import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C1-GAC",
  description: "C1-GAC Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
