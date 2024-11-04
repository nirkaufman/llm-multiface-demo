import "./globals.css";
import {ReactNode} from "react";
import {AI} from "@/app/context/ai";

type RootLayoutProps = {
  children: ReactNode;
}

export default function RootLayout({children}: Readonly<RootLayoutProps>) {
  return (
      <AI>
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
      </AI>
  );
}
