import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  description:
    "Sustainability advisory, workshops and roadmaps to help organisations reduce their environmental impacts and strengthen their business models.",
  title: "Solenn Launay - Sustainability advisor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto min-h-dvh antialiased">{children}</body>
    </html>
  );
}
