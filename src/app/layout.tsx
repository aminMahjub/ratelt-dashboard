import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Ratelt",
    template: "%s | Ratelt",
  },
  description:
    "This web application helps you manage organizational meetings, membership, and templates efficiently.",
  generator: "Nextjs",
  applicationName: "Ratelt",
  keywords: ["Template", "Dashboard", "Meetings", "Membership"],
  creator: "Mohammad Amin Mahjub",
  authors: [
    { name: "Mohammad Amin Mahjub" },
    {
      name: "Irem Magden",
      url: "https://www.figma.com/community/file/973379393056025916",
    },
  ],
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const lato = Lato({
  weight: ["300", "700", "400", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
