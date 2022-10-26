import { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import MetaHead from '../components/meta/meta-head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <MetaHead viewport='initial-scale=1.0, width=device-with' />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
