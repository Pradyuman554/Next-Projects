import { Fugaz_One, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

export const metadata = {
  title: "Toodle",
  description: "Toodle: Track your emotions",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="flex gap-4 p-4 sm:p-8 items-center justify-between text-lime-600">
    <h1 className={' '+fugaz.className}>Toodle</h1>
    </header>
  )

  const footer = (
    <footer>Footer</footer>
  )

  return (
    <html lang="en">
      <body className={'w-full max-w-[1000px] min-h-screen mx-auto flex flex-col text-sm sm:text-base '+ inter.className}>
      {header}
      {children}
      {footer}
      </body>
    </html>
  );
}
