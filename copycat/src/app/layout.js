import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/ui/components/nav/Nav";
import Message from "@/ui/components/Message";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={inter.className}>
          <Nav />
          <Message />
          {children}
        </div>
      </body>
    </html>
  );
}