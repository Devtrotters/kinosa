import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

export default function DefaultLayout({ children, title, footer, pages }) {

    return (
        <>
            <Head>
                <title>{title} | Kinosa</title>
                <link rel="icon" href="/favicon.ico" />
<script>
                    !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
                        n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '520832975746411');
fbq('track', 'PageView');
</script>
                <noscript><img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=520832975746411&ev=PageView&noscript=1"
                /></noscript>
            </Head>
            <>
                <Navbar data={pages} social={footer.social.social} />
                <main>{children}</main>
                <Footer data={footer} menu={pages} />
            </>
        </>
    );
}
