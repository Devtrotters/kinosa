import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Animations from 'components/Jus/Animations';
import Creations from 'components/Jus/Creations';
import Methodes from 'components/Jus/Methodes';
import DefaultLayout from 'components/layouts/default';

export default function jus({ data }) {
    const footerData = {
        feed: data.instagram,
        newsletter: data.newsletter,
        social: data.footerSocial
    };
    return (
        <DefaultLayout
            _site={data._site}
            seo={data.seoJu}
            pages={data.page.pages}
            footer={footerData}>
            <Methodes data={data.jusSmoothie} />
            <Animations data={data.jusAnimation} />
            <Creations headerData={data.creationHeader} data={data.allCreationSaisons} />
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
                seoJu {
                    data: _seoMetaTags {
                        attributes
                        content
                        tag
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
                            image {
                                url
                                id
                                alt
                            }
                        }
                        periode
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
                        url
                        id
                        alt
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
                jusAnimation {
                    contenu {
                        titre
                        texte
                        image {
                            url
                            id
                            alt
                        }
                        id
                    }
                    id
                    titre
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
