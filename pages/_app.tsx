import ShowDialogContext from 'context/ShowDialogContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles/theme';

import * as fbq from '../lib/fpixel';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    const [show, setShow] = useState(false);

    const context = {
        showDialog: show,
        setShowDialog: setShow
    };

    useEffect(() => {
        const handleRouteChange = (url: any) => {
            gtag.pageview(url);
            fbq.pageview();
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ShowDialogContext.Provider value={context}>
                <Component {...pageProps} />
            </ShowDialogContext.Provider>
        </ThemeProvider>
    );
}

export default MyApp;
