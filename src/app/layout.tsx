import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';


const theme = createTheme({
  /** Put your mantine theme override here */
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pasindu Bhanuka",
  description: "Pasindu Bhanuka's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider theme={theme}>
        {children}
        </MantineProvider>
        <script src="https://kit.fontawesome.com/d718882eec.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
