import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cristian Cázares",
  description:
    "Hi! I'm Cristian. A passionate Software Engineer with a minor on Aritificial Intelligence. I have a wide range of experience on differents forms of software, from full stack Web Development to IoT, Virtual Reality and of course, Machine Learning. Here you can find all my projects and experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
