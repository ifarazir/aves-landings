import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const iranyekan = localFont({
  src: [
    {
      path: './fonts/woff2/IRANYekanX-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/woff2/IRANYekanX-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/woff2/IRANYekanX-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/woff2/IRANYekanX-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/woff2/IRANYekanX-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/woff2/IRANYekanX-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/woff2/IRANYekanX-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/woff2/IRANYekanX-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/woff2/IRANYekanX-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-iranyekan',
})

export const metadata: Metadata = {
  title: "Ladies Day - یک روز خاص برای خانم ها",
  description: "یک روز پر از آرامش و به دور از استرس و خستگی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranyekan.variable} font-sans`}>{children}</body>
    </html>
  );
}
