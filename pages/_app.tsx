import { Layout } from '@/components/Layout/Layout';
import { open_sans } from '@/fonts/font';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import styles from '../styles/styles.module.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={`${open_sans.className} ${styles['flex-grow']}`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
