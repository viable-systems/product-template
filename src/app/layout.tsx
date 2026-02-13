import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PRODUCT_NAME',
  description: 'PRODUCT_DESCRIPTION',
  openGraph: {
    title: 'PRODUCT_NAME',
    description: 'PRODUCT_DESCRIPTION',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'PRODUCT_NAME',
    description: 'PRODUCT_DESCRIPTION',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
