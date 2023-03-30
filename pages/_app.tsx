import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/components/Layout/Layout';
import { open_sans } from '@/fonts/font';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={open_sans.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
