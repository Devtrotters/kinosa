import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Animations from 'components/Jus/Animations';
import Creations from 'components/Jus/Creations';
import Header from 'components/Jus/Header';
import DefaultLayout from 'components/layouts/default';

export default function jus({ data }) {
    const footerData = {
        feed: data.instagram,
        newsletter: data.newsletter,
        social: data.footerSocial
    };
    return (
        <DefaultLayout pages={data.page.pages} footer={footerData} title="concept">
            <Header data={data.jusSmoothie} />
            <Animations data={data.jusAnimation} />
            <Creations />
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
                page {
                    pages {
                        id
                        slug
                        titre
                    }
                }
                conceptCitation {
                    citation
                    auteur
                }
                allConceptConcepts {
                    id
                    titre
                    titreSlug
                    slug
                    texte {
                        id
                        texte
                    }
                    image {
                        url
                        alt
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

                conceptHeader {
                    titre
                    texte {
                        id
                        texte
                    }
                    imageMobile {
                        url
                    }
                    image {
                        url
                    }
                }
                conceptHistoire {
                    titre
                    section {
                        id
                        titre
                        texte
                    }
                }
                allConceptPresentations {
                    id
                    image {
                        url
                        alt
                    }
                    nom
                    fonction
                    presentation
                    social {
                        id
                        nom
                        lien
                    }
                }
                conceptSlider {
                    image {
                        id
                        url
                        alt
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
            }
        `
    });
    return {
        props: { data }
    };
}
