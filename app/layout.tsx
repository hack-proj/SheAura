import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";

const font=Inter({subsets:['latin']});

export const metadata: Metadata = {
  title: "SheAura",
  description: "AI-powered women health tracker with insights, resources, and community support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${font.className}`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
    </ThemeProvider>
  );
}
