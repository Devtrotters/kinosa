import Footer from 'components/Footer';
import Head from 'next/head';

export default function DefaultLayout({ children, title, footer }) {
    return (
        <>
            <Head>
                <title>{title} | Kinosa</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <main>{children}</main>
                <Footer data={footer} />
            </>
        </>
    );
}
