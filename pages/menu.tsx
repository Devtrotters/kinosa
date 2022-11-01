import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Methodes from 'components/Jus/Methodes';
import DefaultLayout from 'components/layouts/default';
import Carte from 'components/Menu/Carte';
import Command from 'components/Menu/Command';
import Header from 'components/Menu/Header';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
    AccompagnementContainer,
    CarteButton,
    CarteButtonContainer,
    CarteContainer,
    CarteSection,
    CarteSuperTitle,
    CarteTitle,
    CarteWrapper,
    CategoryContainer,
    Container,
    DropDown,
    ImageContainer,
    Img,
    Menu,
    MenuButton,
    MenuContainer,
    Price,
    Products,
    ProductsArticle,
    ProdutTypeTitle,
    SaleWrapper,
    SauceToppingButton,
    SousCategorie,
    SucreWrapper,
    ToppingSucresButton
} from 'styles/Menu/Carte.style';

import ExternalLinks from '../components/ExternalLinks';
import Creations from '../components/Jus/Creations';
import formatText from '../lib/formatText';
import { MenuLink, MenuText, MenuWrapper, Square } from '../styles/Concept/Concept.style';
import { Title } from '../styles/UI/Texts.style';

export default function menu({ data, reviews }) {
    const footerData = {
        newsletter: data.newsletter,
        social: data.footerSocial
    };

    const [selected, setSelected] = useState(data.allTypeProduits[0].slug);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const section = document.getElementById('carte-section') as HTMLElement;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        section.classList.remove('bg-white');
                        section.classList.remove('bg-orange');
                        section.classList.add(
                            ((entry.target as HTMLElement).dataset as DOMStringMap).color
                        );

                        setSelected(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.25
            }
        );

        const isOdd = (num: number) => {
            return num % 2 == 0;
        };

        data.allTypeProduits.forEach((element: any, i: number) => {
            const el = document.getElementById(element.slug);
            el.dataset.color = isOdd(i) ? 'bg-white' : 'bg-orange';
            observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <DefaultLayout
            _site={data._site}
            seo={data.seoMenu}
            pages={data.page.pages}
            footer={footerData}
            reviews={reviews}>
            <Header data={data.menu} />
            <CarteSection id="carte-section">
                <MenuContainer>
                    <Menu>
                        {data.allTypeProduits.map((type: any) => (
                            <Link key={type.id} href={'#' + type.slug}>
                                <MenuLink>
                                    <MenuWrapper>
                                        <Square
                                            id={type.slug + '-square'}
                                            className={selected === type.slug ? 'displayed' : ''}
                                        />
                                        <MenuText
                                            id={type.slug + '-text'}
                                            className={selected === type.slug ? 'displayed' : ''}
                                            as="h2">
                                            {formatText(type.nom)}
                                        </MenuText>
                                    </MenuWrapper>
                                </MenuLink>
                            </Link>
                        ))}
                        <MenuButton href="#commandes">Commandes</MenuButton>
                    </Menu>
                </MenuContainer>
                <Products>
                    {data.allTypeProduits.map((type: any, i: number) => {
                        const categories = data.allCategorieProduits.filter(
                            (el) => el.typeProduits && el.typeProduits.id === type.id
                        );

                        if (i === 0) {
                            return (
                                <div>
                                    <article id={type.slug} key={i}>
                                        <CarteSuperTitle as="h2">{type.nom}</CarteSuperTitle>
                                        <Carte
                                            categories={categories}
                                            products={data.allProduits}
                                            type={data.allProduits}
                                        />
                                    </article>
                                    <Command command={data.commande.typeCommand} />
                                </div>
                            );
                        } else if (type.slug === 'creations') {
                            return (
                                <div id={type.slug} key={i}>
                                    <Creations
                                        headerData={data.creationHeader}
                                        data={data.allCreationSaisons}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <ProductsArticle id={type.slug} key={i}>
                                    <CarteSuperTitle as="h2">{type.nom}</CarteSuperTitle>
                                    <Carte
                                        categories={categories}
                                        products={data.allProduits}
                                        type={type.slug}
                                    />
                                </ProductsArticle>
                            );
                        }
                    })}
                </Products>
            </CarteSection>
            <Methodes data={data.jusSmoothie} />
            <ExternalLinks data={data.partenaire} displayLine={false} />
        </DefaultLayout>
    );
}

export async function getStaticProps() {
    const httpLink = createHttpLink({
        uri: `https://graphql.datocms.com/`
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
            }
        };
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: gql`
            query {
                _site {
                    favicon: faviconMetaTags {
                        attributes
                        content
                        tag
                    }
                }
                seoMenu {
                    data: _seoMetaTags {
                        attributes
                        content
                        tag
                    }
                }
                page {
                    pages {
                        id
                        slug
                        titre
                    }
                }
                jusSmoothie {
                    images {
                        image
                        altImage
                    }
                    presentation {
                        texte
                        titre
                        id
                    }
                    texte
                    titre
                    id
                }
                menu {
                    titre
                    texte {
                        id
                        texte
                    }
                    image
                    altImage
                    titreCommande
                }
                allTypeProduits {
                    id
                    nom
                    slug
                }
                allCategorieProduits {
                    id
                    nom
                    slug
                    typeProduits {
                        id
                        nom
                        slug
                    }
                }
                allProduits(first: 100) {
                    id
                    nom
                    prix
                    categorie {
                        nom
                        id
                    }
                    sousCategorie {
                        nom
                    }
                    presentation
                    image
                    altImage
                    typeDeProduit {
                        ... on ProduitSaleRecord {
                            id
                            base {
                                id
                                nom
                            }
                            ingredient {
                                id
                                nom
                            }
                            proteine {
                                id
                                nom
                            }
                            accompagnement {
                                id
                                nom
                                liste {
                                    ... on ListeSauceRecord {
                                        id
                                        sauces {
                                            id
                                            nom
                                        }
                                    }
                                    ... on ListeToppingRecord {
                                        id
                                        toppings {
                                            id
                                            nom
                                        }
                                    }
                                }
                            }
                        }
                        ... on ProduitSucreRecord {
                            id
                            fruit {
                                id
                                nom
                                liste {
                                    toppingsSucres {
                                        id
                                        nom
                                    }
                                }
                            }
                        }
                        ... on ProduitCollationRecord {
                            id
                            composition {
                                id
                                nom
                            }
                        }
                    }
                }
                creationHeader {
                    id
                    sousTitre
                    titre
                }
                allCreationSaisons {
                    id
                    saison
                    produits {
                        id
                        produit {
                            id
                            nom
                            fruits {
                                nom
                                id
                            }
                            image
                            altImage
                        }
                        periode
                    }
                }
                partenaire {
                    titre
                    sousTitre
                    liste {
                        id
                        lien
                        nom
                        image
                        altImage
                    }
                }
                commande {
                    typeCommand {
                        id
                        titre
                        button
                        lien
                        image
                        altImage
                    }
                }
                newsletter {
                    titre
                    texte
                    bouton
                }
                footerSocial {
                    titre
                    social {
                        id
                        nom
                        lien
                    }
                }
            }
        `
    });

    const reviews = await fetch(
        'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJg_JHs9OvthIRW6cRDRHcDWE&sensor=true&key=AIzaSyCQ7GVa2SUwnNXW9Pep_oR2w_cVmleEeqM&language=fr&fields=reviews'
    ).then((res) => res.json());

    return {
        props: { data, reviews: reviews.result.reviews ?? [] }
    };
}
