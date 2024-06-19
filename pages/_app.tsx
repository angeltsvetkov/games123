import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import mixpanel from 'mixpanel-browser';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React from 'react';
import { GlobalStyle } from 'components/GlobalStyles';
export const fetchCache = 'force-no-store';

export const revalidate = 0;
function MyApp({ Component, pageProps }: AppProps) {
  mixpanel.init('746e28b1f3129707e9b4821254378048', { debug: true, track_pageview: true, persistence: 'localStorage' });
  mixpanel.track_pageview();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      <ColorModeScript />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

// function Providers<T>({ children }: PropsWithChildren<T>) {
//   return (
//     <NewsletterModalContextProvider>
//       <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
//     </NewsletterModalContextProvider>
//   );
// }

// function Modals() {
//   const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
//   if (!isModalOpened) {
//     return null;
//   }
//   return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
// }

export default MyApp;
