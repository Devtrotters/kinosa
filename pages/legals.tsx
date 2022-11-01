import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import DefaultLayout from 'components/layouts/default';
import formatText from 'lib/formatText';
import { MentionsLegalesSection } from 'styles/MentionsLegales/MentionsLegales.style';
import { theme } from 'styles/theme';

export default function mentionsLegales({ data, reviews }) {
    const footerData = {
        newsletter: data.newsletter,
        social: data.footerSocial
    };
    return (
        <DefaultLayout
            _site={data._site}
            seo={data.seoAccueil}
            pages={data.page.pages}
            footer={footerData}
            reviews={reviews}>
            <MentionsLegalesSection>
                <div>{formatText(data.mentionsLegale.texte)}</div>
            </MentionsLegalesSection>
            {/* <section>
                {formatText(data.mentionsLegale.texte)}
                <style jsx>{`
                    section {
                        color: ${theme.color.green.dark};

                        padding: 0 15px;
                        margin-top: 60px;

                        text-align: justify;
                        > h2 {
                            color: ${theme.color.orange};
                            margin-bottom: 30px;
                        }

                        > h4 {
                            margin-bottom: 10px;
                            text-decoration: underline;
                            color: ${theme.color.green.default};
                        }

                        > p {
                            margin-bottom: 20px;
                        }
                    }
                `}</style> */}
            {/* </section> */}
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
                seoAccueil {
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
                mentionsLegale {
                    texte
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
