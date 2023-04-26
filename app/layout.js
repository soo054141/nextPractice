import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/list">목록</Link>
          <Link href="/list/abc">abc</Link>
          <Link href="/cart">장바구니</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
