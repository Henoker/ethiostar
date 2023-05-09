// import { App, Container } from 'next/app';
import '../styles/globals.css';
import { Raleway } from '@next/font/google';
import Layout from '../components/Layouts/main';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--fontFamily-dm_sans',

});

// const DEFAULT_SEO = {
//   title: 'Ethiostar America Translation and Localization LLC',
//   description: 'Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more',
//   openGraph: {
//     type: 'website',
//     locale: 'en_IE',
//     url: 'https://www.ethiostaramerica.com',
//     title: 'Ethiostar America - Translation and Localization LLC',
//     description: 'Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more.',
//     image:
//       '/logoam.png',
//     site_name: 'Ethiostar America',
//     imageWidth: 500,
//     imageHeight: 500,
//   },
//   twitter: {
//     handle: '@EthiostarB',
//     cardType: 'summary_large_image',
//   },
// };
// export default class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {};
//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   }

//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <Layout className={`${raleway.variable} font-sans`}>
//         <Container>
//           {/* Then we pass the config to the plugin */}
//           <NextSeo config={DEFAULT_SEO} />
//           <Component {...pageProps} />
//         </Container>
//       </Layout>
//     );
//   }
// }
const MyApp = ({ Component, pageProps }) => (
  <Layout className={`${raleway.variable} font-sans`}>
    <Component {...pageProps} />
  </Layout>
);
export default MyApp;
