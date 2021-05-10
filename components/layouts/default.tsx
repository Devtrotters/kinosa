import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DefaultLayout({ children, title, footer, pages }) {
    const router = useRouter();
    function FacebookPixel() {
        useEffect(() => {
            import('react-facebook-pixel')
                .then((x) => x.default)
                .then((ReactPixel) => {
                    ReactPixel.init(process.env.NEXT_PIXEL_ID);
                    ReactPixel.pageView();

                    router.events.on('routeChangeComplete', () => {
                        ReactPixel.pageView();
                    });
                });
        });
        return null;
    }
    return (
        <>
            <Head>
                <title>{title} | Kinosa</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <FacebookPixel />
            <>
                <Navbar data={pages} social={footer.social.social} />
                <main>{children}</main>
                <Footer data={footer} menu={pages} />
            </>
        </>
    );
}
