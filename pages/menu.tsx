import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import DefaultLayout from 'components/layouts/default';
import Carte from 'components/Menu/Carte';
import Command from 'components/Menu/Command';
import Header from 'components/Menu/Header';

export default function menu({ data }) {
    const footerData = {
        feed: data.instagram,
        newsletter: data.newsletter,
        social: data.footerSocial
    };
    return (
        <DefaultLayout
            _site={data._site}
            seo={data.seoMenu}
            pages={data.page.pages}
            footer={footerData}>
            <Header data={data.menu} />
            <Carte categories={data.allCategorieProduits} products={data.allProduits} />
            <Command command={data.commande.typeCommand} />
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
                menu {
                    titre
                    texte {
                        id
                        texte
                    }
                    image {
                        url
                        alt
                    }
                    titreCommande
                }
                allCategorieProduits {
                    id
                    nom
                    slug
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
                    image {
                        url
                        alt
                    }
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
                commande {
                    typeCommand {
                        id
                        titre
                        button
                        lien
                        image {
                            url
                        }
                    }
                }
                instagram {
                    titre
                    texteLien
                    lien
                    image {
                        id
                        lien
                        alt
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
    return {
        props: { data }
    };
}
