import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ], // Specify the weights you need
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Specify the weights you need
});

export const metadata: Metadata = {
  title: "Leading Immigration Consultant, Regina, Saskatchewan Canada",
  description:
    "GTR, Saskatchewan's top Visa and Immigration Consulting service. Specializing in LMIA jobs and SINP. Ranked as the 3rd-top recruitment agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
