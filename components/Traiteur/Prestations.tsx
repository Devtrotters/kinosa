import formatText from 'lib/formatText';
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
                const section = document.getElementById('prestation-section') as HTMLElement;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        section.classList.remove('bg-white');
                        section.classList.remove('bg-orange');
                        section.classList.add(
                            ((entry.target as HTMLElement).dataset as DOMStringMap).color
                        );

                        setSelectedLink(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '0px 0px -80% 0px',
                threshold: 0.25
            }
        );

        const isOdd = (num: number) => {
            return num % 2 == 0;
        };

        data.forEach((element: any, i: number) => {
            const el = document.getElementById(element.slug);
            el.dataset.color = isOdd(i) ? 'bg-white' : 'bg-orange';
            observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <PrestationsWrapper id="prestation-section">
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
                                        {formatText(el.titreSlug)}
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
