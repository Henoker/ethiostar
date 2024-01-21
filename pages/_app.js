// import { App, Container } from 'next/app';
import '../styles/globals.css';
import { Raleway } from '@next/font/google';
import Layout from '../components/Layouts/main';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--fontFamily-dm_sans',

});

const MyApp = ({ Component, pageProps }) => (
  <Layout className={`${raleway.variable} font-sans`}>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
