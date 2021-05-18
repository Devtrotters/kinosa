import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import DefaultLayout from 'components/layouts/default';
import Confiance from 'components/Traiteur/Confiance';
import Header from 'components/Traiteur/Header';
import Prestations from 'components/Traiteur/Prestations';

export default function traiteur({ data }) {
    const footerData = {
        feed: data.instagram,
        newsletter: data.newsletter,
        social: data.footerSocial
    };
    return (
        <DefaultLayout
            _site={data._site}
            seo={data.seoTraiteur}
            pages={data.page.pages}
            footer={footerData}>
            <Header data={data.traiteurHeader} />
            <Prestations data={data.allTraiteurPrestations} />
            <Confiance ExternalData={data.partenaire} />
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
                seoTraiteur {
                    data: _seoMetaTags {
                        attributes
                        content
                        tag
                    }
                }
                traiteurHeader {
                    id
                    titre
                    texte {
                        id
                        texte
                    }
                    image {
                        url
                        id
                        alt
                    }
                }
                allTraiteurPrestations {
                    titre
                    titreSlug
                    slug
                    id
                    contenu {
                        id
                        texte
                        titre
                    }
                    images {
                        alt
                        id
                        url
                    }
                }
                page {
                    pages {
                        id
                        slug
                        titre
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
                page {
                    pages {
                        id
                        titre
                        slug
                    }
                }
                partenaire {
                    titre
                    sousTitre
                    liste {
                        id
                        lien
                        nom
                        logo {
                            alt
                            url
                        }
                    }
                }
            }
        `
    });
    return {
        props: { data }
    };
}
