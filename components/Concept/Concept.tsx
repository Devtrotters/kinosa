import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    Bloc,
    BlocImg,
    BlocText,
    BlocTitle,
    ConceptContainer,
    ConceptSection,
    Menu,
    MenuLink,
    MenuText,
    MenuWrapper,
    Square
} from 'styles/Concept/Concept.style';
export default function Concept({ data }) {
    const [displayed, setDisplayed] = useState(data[0].slug);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setDisplayed(entry.target.id);
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
        <ConceptSection>
            <div>
                <Menu>
                    {data.map((bloc: any, i: number) => (
                        <Link key={bloc.id} href={'#' + bloc.slug}>
                            <MenuLink>
                                <MenuWrapper>
                                    <Square
                                        id={bloc.slug + 'square'}
                                        className={displayed === bloc.slug ? 'displayed' : ''}
                                    />
                                    <MenuText
                                        id={bloc.slug + 'text'}
                                        className={displayed === bloc.slug ? 'displayed' : ''}>
                                        {bloc.titreSlug}
                                    </MenuText>
                                </MenuWrapper>
                            </MenuLink>
                        </Link>
                    ))}
                </Menu>
            </div>
            <ConceptContainer id="concept-container">
                {data.map((bloc: any) => (
                    <Bloc id={bloc.slug} key={bloc.id}>
                        <BlocTitle>{bloc.titre}</BlocTitle>
                        {bloc.texte.map((text: any) => (
                            <BlocText key={text.id}>{text.texte}</BlocText>
                        ))}
                        <BlocImg src={bloc.image.url} alt={bloc.image.alt || 'image du site'} />
                    </Bloc>
                ))}
            </ConceptContainer>
        </ConceptSection>
    );
}
