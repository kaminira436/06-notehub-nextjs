import type { Metadata } from "next";
import "./globals.css";
import "modern-normalize";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "NoteHub application",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />

          {children}

          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}