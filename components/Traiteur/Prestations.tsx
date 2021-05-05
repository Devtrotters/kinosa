import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
    PrestationsBlocContainer,
    PrestationsBlocImage,
    PrestationsBlocImageContainer,
    PrestationsBlocText,
    PrestationsBlocTextContainer,
    PrestationsBlocTextWrapper,
    PrestationsBlocTitle,
    PrestationsContainer,
    PrestationsNav,
    PrestationsNavLink,
    PrestationsNavLinkWrapper,
    PrestationsNavSquare,
    PrestationsNavText,
    PrestationsNavWrapper,
    PrestationsTitle,
    PrestationsWrapper
} from 'styles/Traiteur/Prestations.style';

export default function Prestations({ data }) {
    const [selectedLink, setSelectedLink] = useState(data[0].slug);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSelectedLink(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '0px 0px -80% 0px',
                threshold: 0.25
            }
        );
        data.forEach((element: any) => {
            observer.observe(document.getElementById(element.slug));
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <PrestationsWrapper>
            <PrestationsNav>
                <PrestationsNavWrapper>
                    {data.map((el: any, i: number) => (
                        <Link key={i} href={'#' + el.slug}>
                            <PrestationsNavLink>
                                <PrestationsNavLinkWrapper>
                                    <PrestationsNavSquare
                                        id={el.slug + 'square'}
                                        className={
                                            selectedLink === el.slug ? 'selected' : ''
                                        }></PrestationsNavSquare>
                                    <PrestationsNavText
                                        id={el.slug + 'text'}
                                        className={selectedLink === el.slug ? 'selected' : ''}>
                                        {el.titreSlug}
                                    </PrestationsNavText>
                                </PrestationsNavLinkWrapper>
                            </PrestationsNavLink>
                        </Link>
                    ))}
                </PrestationsNavWrapper>
            </PrestationsNav>

            <PrestationsContainer>
                {data.map((el: any) => (
                    <PrestationsBlocContainer id={el.slug} key={el.id}>
                        <PrestationsTitle>{el.titre}</PrestationsTitle>
                        <PrestationsBlocTextWrapper>
                            {el.contenu.map((contenu: any) => (
                                <PrestationsBlocTextContainer key={contenu.id}>
                                    <PrestationsBlocTitle>{contenu.titre}</PrestationsBlocTitle>
                                    <PrestationsBlocText>{contenu.texte}</PrestationsBlocText>
                                </PrestationsBlocTextContainer>
                            ))}
                        </PrestationsBlocTextWrapper>
                        <PrestationsBlocImageContainer>
                            {el.images.map((image: any) => (
                                <PrestationsBlocImage
                                    key={image.id}
                                    alt={image.alt || 'image du site'}
                                    src={image.url}
                                />
                            ))}
                        </PrestationsBlocImageContainer>
                    </PrestationsBlocContainer>
                ))}
            </PrestationsContainer>
        </PrestationsWrapper>
    );
}
