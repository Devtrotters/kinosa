import ExternalLinks from 'components/ExternalLinks';
import React from 'react';
import { ConfianceContainer } from 'styles/Traiteur/Confiance.style';

export default function Confiance({ ExternalData }) {
    return <ExternalLinks data={ExternalData} displayLine={false} />;
}
