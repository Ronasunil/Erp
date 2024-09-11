import { Varela_Round } from "next/font/google";

import { Header } from "@/components/Header";
import "./_styles/globals.css";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
