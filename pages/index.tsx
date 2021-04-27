import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Carte from 'components/Home/Carte/Carte';
import Command from 'components/Home/Command';
import Concept from 'components/Home/Concept';
import Header from 'components/Home/Header';
import DefaultLayout from 'components/layouts/default';
import Link from 'next/link';

// TODO : Delete all images in public
//TODO: mettre favicon
export default function Home({ data }) {
    const footerData = {
        feed: data.instagram,
        newsletter: data.newsletter,
        social: data.footerSocial
    };
    return (
        <DefaultLayout pages={data.page.pages} footer={footerData} title="home">
            <Header data={data.homeHeader} />
            <>
                <Command command={data.commande} ExternalData={data.plateforme} />
                <Carte
                    data={data.homeCarte}
                    products={data.allProduits}
                    categories={data.allCategorieProduits}
                />
                <Concept data={data.homeConcept} ExternalData={data.partenaire} />
            </>
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
                homeHeader {
                    titre
                    hook {
                        titre
                        sousTitre
                        image {
                            url
                        }
                        button
                        id
                    }
                }
                homeCarte {
                    titre
                    sousTitre
                    button
                    presentation {
                        image {
                            url
                            alt
                        }
                        texte
                        id
                    }
                }
                plateforme {
                    titre
                    sousTitre
                    liste {
                        id
                        logo {
                            url
                            alt
                        }
                        nom
                        lien
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
                homeConcept {
                    titre
                    sousTitre
                    texte {
                        id
                        texte
                    }
                    bouton
                    gerant {
                        id
                        image {
                            url
                            alt
                        }
                        texte
                    }
                }
                allCategorieProduits {
                    id
                    nom
                }
                allProduits(first: 100) {
                    id
                    nom
                    composition
                    prix
                    categorie {
                        nom
                        id
                    }
                }
                commande {
                    typeCommand {
                        id
                        titre
                        button
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
