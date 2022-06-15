import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Citation from 'components/Concept/Citation';
import Header from 'components/Concept/Header';
import History from 'components/Concept/History';
import Slider from 'components/Concept/Slider';
import Equipe from 'components/Home/Equipe';
import Valeurs from 'components/Home/Valeurs';
import DefaultLayout from 'components/layouts/default';

export default function concept({ data }) {
    const footerData = {
        feed: data.instagram,
        newsletter: data.newsletter,
        social: data.footerSocial
    };
    return (
        <DefaultLayout
            _site={data._site}
            seo={data.seoConcept}
            pages={data.page.pages}
            footer={footerData}>
            <Header data={data.conceptHeader} />
            <Citation data={data.conceptCitation} />
            <Equipe data={data.allConceptPresentations} />
            <Valeurs data={data.allConceptConcepts} />
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
                _site {
                    favicon: faviconMetaTags {
                        attributes
                        content
                        tag
                    }
                }
                seoConcept {
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
