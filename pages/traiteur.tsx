import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import DefaultLayout from 'components/layouts/default';
import Confiance from 'components/Traiteur/Confiance';
import Header from 'components/Traiteur/Header';
import Prestations from 'components/Traiteur/Prestations';

import Slider from '../components/Concept/Slider';

export default function traiteur({ data, reviews }) {
    const footerData = {
        newsletter: data.newsletter,
        social: data.footerSocial
    };
    return (
        <DefaultLayout
            _site={data._site}
            seo={data.seoTraiteur}
            pages={data.page.pages}
            footer={footerData}
            reviews={reviews}>
            <Header data={data.traiteurHeader} />
            <Prestations data={data.allTraiteurPrestations} />
            <Slider data={data.conceptSlider.images} />

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
                conceptSlider {
                    images {
                        image
                        altImage
                    }
                }
                traiteurHeader {
                    id
                    titre
                    texte {
                        id
                        texte
                    }
                    image
                    altImage
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
                        image
                        altImage
                    }
                }
                page {
                    pages {
                        id
                        slug
                        titre
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
                        image
                        altImage
                    }
                }
            }
        `
    });

    const reviews = await fetch(
        'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJg_JHs9OvthIRW6cRDRHcDWE&sensor=true&key=AIzaSyCQ7GVa2SUwnNXW9Pep_oR2w_cVmleEeqM&language=fr&fields=reviews'
    ).then((res) => res.json());

    return {
        props: { data, reviews: reviews?.result?.reviews ?? [] }
    };
}
