import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

import Pixel from '../Pixel/Pixel';

export default function DefaultLayout({ children, title, footer, pages }) {
    return (
        <>
            <Head>
                <title>{title} | Kinosa</title>
                <link rel="icon" href="/favicon.ico" />
                <Pixel name="FACEBOOK_PIXEL" />
            </Head>
            <>
                <Navbar data={pages} social={footer.social.social} />
                <main>{children}</main>
                <Footer data={footer} menu={pages} />
            </>
        </>
    );
}
