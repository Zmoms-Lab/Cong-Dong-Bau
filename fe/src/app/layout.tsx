import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cộng Đồng Bầu",
  description: "Bộ thẻ phát triển dành cho mẹ và bé",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
