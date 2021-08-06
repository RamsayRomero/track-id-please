import 'tailwindcss/tailwind.css';
import { ProvideAuth } from '../context/auth-context';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}
export default MyApp;
