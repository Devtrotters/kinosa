import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Carte from 'components/Home/Carte/Carte';
import Command from 'components/Home/Command';
import Header from 'components/Home/Header';
import Services from 'components/Home/Services';
import Valeurs from 'components/Home/Valeurs';
import DefaultLayout from 'components/layouts/default';

import Citation from '../components/Concept/Citation';
import Slider from '../components/Concept/Slider';
import ExternalLinks from '../components/ExternalLinks';
import Equipe from '../components/Home/Equipe';

export default function Home({ data }) {
    const footerData = {
        feed: data.instagram,
        newsletter: data.newsletter,
        social: data.footerSocial
    };

    return (
        <DefaultLayout
            _site={data._site}
            seo={data.seoAccueil}
            pages={data.page.pages}
            footer={footerData}>
            <Header data={data.homeHeader} />
            <>
                <Citation data={data.conceptCitation} />
                <Services data={data.homeConcept} />
                <ExternalLinks data={data.partenaire} displayLine={false} />
                <Slider data={data.conceptSlider.image} />
                <Carte
                    data={data.homeCarte}
                    products={data.allProduits}
                    categories={data.allCategorieProduits}
                />
                <Command
                    data={data.homeCommande}
                    command={data.commande}
                    ExternalData={data.plateforme}
                />
                <Valeurs data={data.allConceptConcepts} />
                <Equipe data={data.allConceptPresentations} />
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
                homeHeader {
                    titre
                    hook {
                        titre
                        sousTitre
                        image {
                            url
                        }
                        button
                        lien
                        id
                    }
                }
                conceptCitation {
                    citation
                    auteur
                }
                conceptSlider {
                    image {
                        id
                        url
                        alt
                    }
                }
                homeCommande {
                    titre
                    texte {
                        id
                        texte
                    }
                }
                homeCarte {
                    titre
                    sousTitre
                    button
                    lienBouton
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
                    lienBouton
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
                    lien
                    texteLien
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
