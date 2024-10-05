import type { Metadata } from "next";
import "./styles/main.scss";
import CanvasBackground from "./ui/components/CanvasBackground";
import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`body`}>
        <CanvasBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
