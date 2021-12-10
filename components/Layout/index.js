// import Header from "../common/Header";
// import Footer from "../Footer";
// import content from "../../locales/en-us.json";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googleoptimize.com/optimize.js?id=OPT-T9CBT3Z"
        ></script>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-214983354-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-214983354-1');`,
          }}
        ></script>
      </Head>
      {/* <Header content={content} /> */}
      {children}
      {/* <Footer content={content} /> */}
    </>
  );
};

export default Layout;
