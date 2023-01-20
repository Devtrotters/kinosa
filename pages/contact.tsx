import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import axios from 'axios';
import DefaultLayout from 'components/layouts/default';
import formatText from 'lib/formatText';
import { useState } from 'react';
import {
    ContactSection,
    ContactText,
    Field,
    Form,
    FormInput,
    GridContainer,
    GridSection,
    GridText,
    GridTitle,
    Img,
    Map,
    MapContainer,
    QuestionArea,
    Radio,
    RadioContainer,
    RadioLabel,
    RadioWrapper,
    RequiredFieldText,
    SubmitButton,
    SubmitButtonContainer,
    TopSection
} from 'styles/Contact/Contact.style';
import { Text, Title } from 'styles/UI/Texts.style';

import ExternalLinks from '../components/ExternalLinks';
import Command from '../components/Home/Command';

export default function contact({ data, reviews }) {
    const footerData = {
        newsletter: data.newsletter,
        social: data.footerSocial
    };

    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        tel: '',
        clientType: '',
        question: ''
    });

    const [buttonText, setButtonText] = useState('Envoyer >');

    const changeHandler = (e: any) => {
        e.preventDefault();

        e.target.parentNode.classList.remove('invalid');

        const inputDataCopy = { ...inputData };

        const value = e.target.value;
        const invalid = e.target.classList.contains('invalid');

        switch (e.target.name) {
            case 'name':
                inputDataCopy.name = value;
                if (value === '' && invalid) {
                    invalidHandler(e);
                }
                break;
            case 'email':
                inputDataCopy.email = value;
                if (value === '' && invalid) {
                    invalidHandler(e);
                }
                break;
            case 'tel':
                inputDataCopy.tel = value;
                break;
            case 'clientType':
                inputDataCopy.clientType = value;
                break;
            case 'question':
                inputDataCopy.question = value;
                break;
        }
        setInputData(inputDataCopy);
    };

    const submitHandler = (e: any) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: '/api/mail',
            data: inputData
        }).then(() => {
            setInputData(() => ({
                name: '',
                email: '',
                tel: '',
                clientType: '',
                question: ''
            }));
            setButtonText('Envoyé !');
        });
    };

    const invalidHandler = (e: any) => {
        e.preventDefault();
        e.target.classList.add('invalid');
        e.target.parentNode.classList.add('invalid');
    };

    return (
        <DefaultLayout
            _site={data._site}
            seo={data.seoContact}
            pages={data.page.pages}
            footer={footerData}
            reviews={reviews}>
            <ContactSection>
                <TopSection>
                    <Title>{formatText(data.contact.titre)}</Title>
                    {data.contact.texte.map((text: any) => (
                        <ContactText key={text.id}>{formatText(text.texte)}</ContactText>
                    ))}
                </TopSection>
                <GridContainer>
                    <GridSection>
                        <GridTitle>Point de vente (Gare sud de France)</GridTitle>
                        <GridText>
                            1521, Rue de la Font de la Banquière <br /> 34000 Montpellier
                        </GridText>
                    </GridSection>
                    <GridSection>
                        <GridTitle>Siège social</GridTitle>
                        <GridText>
                            42, rue de l’Aiguillerie <br /> 34000 Montpellier
                        </GridText>
                    </GridSection>
                    <GridSection>
                        <GridTitle>Contact</GridTitle>
                        <GridText>
                            06 46 19 37 73
                            <br />
                            contact@kinosa.fr
                        </GridText>
                    </GridSection>
                    <GridSection>
                        <GridTitle>Horaires</GridTitle>
                        <GridText>7jours/7 - 8h30 à 20h00</GridText>
                    </GridSection>
                </GridContainer>
                <Form onSubmit={(e) => submitHandler(e)}>
                    <Field>
                        <Text>
                            Nom et Prénom<span> *</span>
                        </Text>
                        <FormInput
                            placeholder="Jean Dupont"
                            type="text"
                            name="name"
                            value={inputData.name}
                            onChange={(e) => changeHandler(e)}
                            required
                            onInvalid={(e) => invalidHandler(e)}
                        />
                    </Field>
                    <Field>
                        <Text>
                            Adresse mail<span> *</span>
                        </Text>
                        <FormInput
                            placeholder="exemple@exemple.fr"
                            type="email"
                            name="email"
                            value={inputData.email}
                            onChange={(e) => changeHandler(e)}
                            required
                            onInvalid={(e) => invalidHandler(e)}
                        />
                    </Field>
                    <Field>
                        <Text>Téléphone</Text>
                        <FormInput
                            placeholder="06.06.06.06.06"
                            type="text"
                            name="tel"
                            value={inputData.tel}
                            onChange={(e) => changeHandler(e)}
                        />
                    </Field>
                    <Field>
                        <Text>Une question ?</Text>
                        <QuestionArea
                            name="question"
                            placeholder="Envoyez nous toute votre bonne humeur !"
                            rows={10}
                            value={inputData.question}
                            onChange={(e) => changeHandler(e)}></QuestionArea>
                        <RequiredFieldText>*Champs obligatoires</RequiredFieldText>
                    </Field>
                    <SubmitButtonContainer>
                        <SubmitButton type="submit" value={buttonText} />
                    </SubmitButtonContainer>
                </Form>
                <MapContainer>
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <Map
                        id="map"
                        frameBorder="0"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCQ7GVa2SUwnNXW9Pep_oR2w_cVmleEeqM&q=Kinosa,Montpellier+France"
                        allowFullScreen></Map>
                </MapContainer>
            </ContactSection>
            <Command
                data={data.homeCommande}
                command={data.commande}
                ExternalData={data.plateforme}
            />
            <ExternalLinks data={data.partenaire} displayLine={false} />
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
                seoContact {
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
                contact {
                    titre
                    texte {
                        id
                        texte
                    }
                    image
                    altImage
                }
                homeCommande {
                    titre
                    texte {
                        id
                        texte
                    }
                }
                commande {
                    typeCommand {
                        id
                        titre
                        button
                        lien
                        image
                        altImage
                    }
                }
                plateforme {
                    titre
                    sousTitre
                    liste {
                        id
                        image
                        altImage
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
                        image
                        altImage
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

    const reviews = await fetch(
        'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJg_JHs9OvthIRW6cRDRHcDWE&sensor=true&key=AIzaSyCQ7GVa2SUwnNXW9Pep_oR2w_cVmleEeqM&language=fr&fields=reviews'
    ).then((res) => res.json());

    return {
        props: { data, reviews: reviews?.result?.reviews ?? [] }
    };
}
