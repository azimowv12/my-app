import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Ob-havo",
  description: "N1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
