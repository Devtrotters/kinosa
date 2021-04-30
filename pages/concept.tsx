import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Citation from 'components/Concept/Citation';
import Concept from 'components/Concept/Concept';
import Header from 'components/Concept/Header';
import History from 'components/Concept/History';
import Presentation from 'components/Concept/Presentation';
import Slider from 'components/Concept/Slider';
import DefaultLayout from 'components/layouts/default';

export default function concept({ data }) {
    const footerData = {
        feed: data.instagram,
        newsletter: data.newsletter,
        social: data.footerSocial
    };
    return (
        <DefaultLayout pages={data.page.pages} footer={footerData} title="concept">
            <Header data={data.conceptHeader} />
            <Citation data={data.conceptCitation} />
            <Presentation data={data.allConceptPresentations} />
            <Concept data={data.allConceptConcepts} />
            <History data={data.conceptHistoire} />
            <Slider data={data.conceptSlider.image} />
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
            }
        `
    });
    return {
        props: { data }
    };
}
