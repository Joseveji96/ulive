import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ULIVE APP",
  description: "ULIVE APP - Social Media Gallery",
  icons: {
    icon:["ulogo.ico?v=4"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth md:scroll-auto">
      <body className="font-satoshi hide-scrollbar scroll-smooth md:scroll-auto">
        {children}
      </body>
    </html>
  );
}
