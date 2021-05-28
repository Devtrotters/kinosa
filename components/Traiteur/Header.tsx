import formatText from 'lib/formatText';
import React, { useEffect, useState } from 'react';
import {
    HeaderContainer,
    HeaderImage,
    HeaderText,
    HeaderTextContainer,
    HeaderTitle
} from 'styles/Traiteur/Header.style';

export default function Header({ data }) {
    return (
        <HeaderContainer key={data.id}>
            <HeaderTextContainer>
                <HeaderTitle key={data.id}>{formatText(data.titre)}</HeaderTitle>
                {data.texte.map((el: any) => (
                    <HeaderText key={el.id}>{formatText(el.texte)}</HeaderText>
                ))}
            </HeaderTextContainer>
            <HeaderImage src={data.image.url} alt={data.image.alt || 'image du site'} />
        </HeaderContainer>
    );
}
