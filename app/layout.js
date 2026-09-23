import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata = {
  title: "InspectPro – Forklift Inspection Checklist Software",
  description:
    "Make every forklift inspection consistent. Standardize inspections, identify issues early, and keep records organized with InspectPro.",
  keywords: "forklift inspection, safety checklist, warehouse safety, equipment inspection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
