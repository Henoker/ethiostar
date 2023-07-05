import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Main = ({ children }) => (
  <>
    <Head>
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    <Navbar />

    {children}
    <Footer />

  </>
);
export default Main;
