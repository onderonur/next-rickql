import { Layout } from '@/core/layouts/components/layout';
import { BaseQueryClientProvider } from '@/core/query-client/components/base-query-client-provider';
import '@/core/styles/globals.css';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';
import { twJoin } from 'tailwind-merge';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#fff',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={twJoin(
        'dark scheme-dark',
        // fluid font-size:
        // 12px - 16px for 320px - 1024px viewport
        'text-[clamp(0.75rem,0.636rem+0.57vw,1rem)]',
      )}
    >
      <body
        className={twJoin(
          inter.variable,
          'font-sans antialiased',
          // Disable body scrolling when a `<dialog>` is open
          'has-[dialog[open]]:overflow-hidden',
        )}
      >
        <BaseQueryClientProvider>
          <Layout>{children}</Layout>
        </BaseQueryClientProvider>
      </body>
    </html>
  );
}
