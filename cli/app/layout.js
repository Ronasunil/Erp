import { Varela_Round } from "next/font/google";

import { Header } from "@/components/Header";
import "./_styles/globals.css";
import { Toaster } from "react-hot-toast";

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Home",
  description: "Home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={varelaRound.className}>
        <Toaster position="top-center" />
        <Header />
        {children}
      </body>
    </html>
  );
}
