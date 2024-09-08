import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peter Mora-Stevens | Personal Website",
  description: "An updated storage for my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={archivo.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
