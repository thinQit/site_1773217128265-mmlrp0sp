import "./globals.css";
import { Anton, Montserrat } from "next/font/google";
import Shell from "@/components/Shell";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${montserrat.variable} font-sans bg-background text-foreground`}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
