import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solenn Launay - Sustainability advisor",
  description:
    "Sustainability advisory, workshops and roadmaps to help organisations reduce their environmental impacts and strengthen their business models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-dvh mx-auto">{children}</body>
    </html>
  );
}
