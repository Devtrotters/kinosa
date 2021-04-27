import Footer from 'components/Footer';
import Menu from 'components/Menu';
import Head from 'next/head';

export default function DefaultLayout({ children, title, footer, pages }) {
    return (
        <>
            <Head>
                <title>{title} | Kinosa</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <Menu data={pages} social={footer.social.social} />
                <main>{children}</main>
                <Footer data={footer} />
            </>
        </>
    );
}
