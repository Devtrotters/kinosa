import Head from 'next/head';
import React from 'react';

import FACEBOOK_PIXEL from './facebook/pixel';

export default function Pixel({ name }) {
    return <Head>{name === 'FACEBOOK_PIXEL' && <FACEBOOK_PIXEL />}</Head>;
}
