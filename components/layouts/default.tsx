import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Head from 'next/head';
import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

export default function DefaultLayout({ children, title, footer, pages }) {
    useEffect(() => {
        hotjar.initialize(2392724, 6);
    }, []);

    return (
        <>
            <Head>
                <title>{title} | Kinosa</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <Navbar data={pages} social={footer.social.social} />
                <main>{children}</main>
                <Footer data={footer} menu={pages} />
            </>
        </>
    );
}
