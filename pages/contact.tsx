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
    FormContainer,
    FormInput,
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
    SubmitButtonContainer
} from 'styles/Contact/Contact.style';
import { Text, Title } from 'styles/UI/Texts.style';

export default function contact({ data }) {
    const footerData = {
        feed: data.instagram,
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

    const [buttonText, setButtonText] = useState('Envoyer');

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
            footer={footerData}>
            <ContactSection>
                <FormContainer>
                    <div>
                        <Title>{formatText(data.contact.titre)}</Title>
                        {data.contact.texte.map((text: any) => (
                            <ContactText key={text.id}>{formatText(text.texte)}</ContactText>
                        ))}
                    </div>
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
                            <Text>Type de client</Text>
                            <RadioContainer>
                                <RadioWrapper>
                                    <Radio
                                        id="Professionnel"
                                        type="radio"
                                        name="clientType"
                                        value="Professionnel"
                                        onChange={(e) => changeHandler(e)}
                                    />
                                    <RadioLabel htmlFor="Professionnel">Professionnel</RadioLabel>
                                </RadioWrapper>
                                <RadioWrapper>
                                    <Radio
                                        id="Particulier"
                                        type="radio"
                                        name="clientType"
                                        value="Particulier"
                                        onChange={(e) => changeHandler(e)}
                                    />
                                    <RadioLabel htmlFor="Particulier">Particulier</RadioLabel>
                                </RadioWrapper>
                            </RadioContainer>
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
                </FormContainer>
                <article>
                    <Img
                        src={data.contact.image.url}
                        alt={data.contact.image.alt || 'img du site'}
                    />
                </article>
                <MapContainer>
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <Map
                        id="map"
                        frameBorder="0"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCQ7GVa2SUwnNXW9Pep_oR2w_cVmleEeqM&q=Kinosa,Montpellier+France"
                        allowFullScreen></Map>
                </MapContainer>
            </ContactSection>
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
                    image {
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
