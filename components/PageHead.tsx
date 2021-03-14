import React from "react";
import Head from "next/head";

const PageHead = () => {
    return (
        <Head>
            <meta name="twitter:title" content="Calculate Pi" />
            {/* <meta name="twitter:image" content="/assets/images/pi.png" /> */}
            <meta property="og:title" content="Calculate Pi" />
            {/* <meta property="og:image" content="/assets/images/pi.png" /> */}
            <title>Pi</title>
            {/* <link rel="icon" href="/favicon.png" /> */}
            {/* <link rel="manifest" href="/manifest.json" /> */}
            {/* <link rel="apple-touch-icon" href="/assets/images/pi.png" /> */}
            {/* <meta name="apple-mobile-web-app-capable" content="yes" /> */}
            <meta
                name="description"
                content="Calculate Pi with infinite series"
            />
            <meta name="theme-color" content="#000000" />
        </Head>
    );
};

export default PageHead;
