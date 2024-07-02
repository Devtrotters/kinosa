import axios from 'axios';
import SocialLogo from 'components/SocialLogo';
import formatText from 'lib/formatText';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {
    ContactSection,
    ContactText,
    Feed,
    FeedLink,
    FooterContainer,
    HorairesSection,
    HorairesText,
    InputRGPD,
    InputRGPDLabel,
    InputRGPDLegal,
    Instagram,
    InstagramImg,
    InstagramImgLink,
    Map,
    MapContainer,
    MenuContainer,
    MenuText,
    NewsLetter,
    NewsLetterButton,
    NewsLetterContainer,
    NewsLetterForm,
    NewsLetterInput,
    NewsLetterText,
    NewsLetterTitle,
    NewsLetterWrapper,
    PdvSection,
    PdvText,
    Review,
    ReviewArrow,
    Reviews,
    ReviewsBottom,
    ReviewsContainer,
    ReviewsWrapper,
    RGPDContainer,
    RGPDWrapper,
    SiegeSection,
    SiegeText,
    SlideWrapper,
    SocialLogoContainer,
    SocialSection,
    SocialText
} from 'styles/Footer.style';
import { Title } from 'styles/UI/Texts.style';

import ShowDialogContext from '../context/ShowDialogContext';
import MessengerPlugin from './MessengerPlugin';

export default function Footer({ data, menu, reviews }) {
    const [input, setInput] = useState({ email: '', newsLetter: false, transmit: false });
    const [buttonText, setbuttonText] = useState(data.newsletter.bouton);
    const [links, setLinks] = useState([]);

    const [slide, setSlide] = useState(0);

    const { showDialog } = useContext(ShowDialogContext);

    // useEffect(() => {
    //     const getReviews = async () => {
    //         const { data } = await axios.get(
    //             'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJg_JHs9OvthIRW6cRDRHcDWE&sensor=true&key=AIzaSyCQ7GVa2SUwnNXW9Pep_oR2w_cVmleEeqM&language=fr&fields=reviews'
    //         );

    //         console.log(data);

    //         const formatedReviews = [...data.reviews];

    //         formatedReviews.push({
    //             author_name: "L'équipe Kinosa",
    //             text:
    //                 'Envie d\'en voir plus ?<br />Rendez-vous sur <a href="https://nos-avis.kinosa.fr" target="_blank" rel="noreferrer">nos-avis.kinosa.fr</a> !'
    //         });

    //         setReviews([formatedReviews]);
    //     };

    //     getReviews();
    // }, []);

    // useEffect(() => {
    //     const getFromInstagram = async () => {
    //         const instagram = [];
    //         await axios
    //             .get(
    //                 `https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/${data.feed.image[0].lien}/&fields=thumbnail_url&access_token=2842645105957402%7Cd111c0a3d230497b536bded41ef33c58`
    //             )
    //             .then((res) => instagram.push(res.data.thumbnail_url));
    //         await axios
    //             .get(
    //                 `https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/${data.feed.image[1].lien}/&fields=thumbnail_url&access_token=2842645105957402%7Cd111c0a3d230497b536bded41ef33c58`
    //             )
    //             .then((res) => instagram.push(res.data.thumbnail_url));
    //         await axios
    //             .get(
    //                 `https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/${data.feed.image[2].lien}/&fields=thumbnail_url&access_token=2842645105957402%7Cd111c0a3d230497b536bded41ef33c58`
    //             )
    //             .then((res) => instagram.push(res.data.thumbnail_url));
    //         // for (let i = 0; i < data.feed.image.length; i++) {
    //         //     await axios
    //         //         .get(
    //         //             `https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/${data.feed.image[i].lien}/&fields=thumbnail_url&access_token=2842645105957402%7Cd111c0a3d230497b536bded41ef33c58`
    //         //         )
    //         //         .then((res) => instagram.push(res.data.thumbnail_url));
    //         // }
    //         setLinks(() => instagram);
    //     };
    //     getFromInstagram();
    // }, []);

    const horaires = {
        titre: 'Horaires',
        ouverture: 'Du lundi au vendredi de 10h à 15h30',
        joignable: 'Nous restons joignables : 9h-19h'
    };

    const changeHandler = (e: any, value: string) => {
        e.preventDefault();
        setInput({ email: value, newsLetter: input.newsLetter, transmit: input.transmit });
    };

    const submitHandler = async (e: any) => {
        e.preventDefault();

        if (input.email != '' && input.newsLetter) {
            await axios.post('/api/newsletter', { input }).then((res) => {
                setbuttonText(res.data.text);
                setTimeout(() => {
                    setbuttonText(data.newsletter.bouton);
                    setInput({ email: '', newsLetter: false, transmit: false });
                }, 3000);
            });
        }
    };

    const handleSlide = (direction: string) => {
        if (direction === 'next') {
            if (slide < reviews.length - 1) {
                setSlide(slide + 1);
            } else {
                setSlide(0);
            }
        } else if (direction === 'prev') {
            if (slide > 0) {
                setSlide(slide - 1);
            } else {
                setSlide(reviews.length - 1);
            }
        }
    };

    return (
        <footer>
            <ReviewsContainer>
                <ReviewsWrapper>
                    <ReviewArrow onClick={(e) => handleSlide('prev')}>
                        <svg
                            width="23"
                            height="25"
                            viewBox="0 0 23 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.942383 12.3998L12.3539 24.0398L14.001 22.3598L5.41289 13.5998H22.5885V11.1998H5.41288L14.001 2.43977L12.3539 0.759766L0.942383 12.3998Z"
                                fill="#007A0C"
                            />
                        </svg>
                    </ReviewArrow>

                    <Reviews>
                        <SlideWrapper slide={slide}>
                            {reviews.map((review: any, index: number) => (
                                <Review key={index}>
                                    <p>{review.author_name}</p>
                                    <p>
                                        {formatText(
                                            review.text.length > 340
                                                ? review.text.substring(0, 337) + '...'
                                                : review.text
                                        )}
                                    </p>
                                </Review>
                            ))}
                        </SlideWrapper>
                    </Reviews>
                    <ReviewArrow onClick={(e) => handleSlide('next')}>
                        <svg
                            width="23"
                            height="25"
                            viewBox="0 0 23 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22.0576 12.6002L10.6461 0.960229L8.99905 2.64023L17.5871 11.4002L0.411515 11.4002L0.411515 13.8002L17.5871 13.8002L8.99904 22.5602L10.6461 24.2402L22.0576 12.6002Z"
                                fill="#007A0C"
                            />
                        </svg>
                    </ReviewArrow>
                </ReviewsWrapper>
                <ReviewsBottom>
                    <p>Votre satisfaction est notre meilleure publicité !</p>
                    <p>
                        Exprimez votre opinion sur nos produits et services ici :{' '}
                        <a href="https://avis.kinosa.fr" target="_blank" rel="noreferrer">
                            avis.kinosa.fr
                        </a>
                    </p>
                </ReviewsBottom>
            </ReviewsContainer>
            <NewsLetter>
                <NewsLetterContainer>
                    <NewsLetterWrapper>
                        <NewsLetterTitle>{formatText(data.newsletter.titre)}</NewsLetterTitle>
                        <NewsLetterText>{formatText(data.newsletter.texte)}</NewsLetterText>
                        <NewsLetterForm onSubmit={(e) => submitHandler(e)}>
                            <NewsLetterInput
                                type="email"
                                name="email"
                                placeholder="Example@mail.com"
                                value={input.email}
                                onChange={(e) => changeHandler(e, e.target.value)}
                            />
                            <NewsLetterButton type="submit" value={buttonText} />
                        </NewsLetterForm>
                        <RGPDContainer>
                            <RGPDWrapper>
                                <InputRGPD
                                    type="checkbox"
                                    onChange={() => {
                                        setInput({
                                            email: input.email,
                                            newsLetter: !input.newsLetter,
                                            transmit: input.transmit
                                        });
                                    }}
                                />
                                <InputRGPDLabel>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    J'accepte de recevoir les newsletter Kinosa
                                </InputRGPDLabel>
                            </RGPDWrapper>
                            <RGPDWrapper>
                                <InputRGPD
                                    type="checkbox"
                                    onChange={() => {
                                        setInput({
                                            email: input.email,
                                            newsLetter: input.newsLetter,
                                            transmit: !input.transmit
                                        });
                                    }}
                                />
                                <InputRGPDLabel>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    J'accepte que mes données soient transmises aux partenaires qui
                                    pourront également envoyer des e-mails
                                </InputRGPDLabel>
                            </RGPDWrapper>
                            <InputRGPDLegal>
                                Un lien de désinscription sera indiqué au bas de chaque mail.
                            </InputRGPDLegal>
                        </RGPDContainer>
                    </NewsLetterWrapper>
                </NewsLetterContainer>
            </NewsLetter>
            <FooterContainer>
                <svg
                    width="219"
                    height="65"
                    viewBox="0 0 219 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M140.596 61.6727C141.843 61.6727 142.853 60.6663 142.853 59.4249C142.853 58.1834 141.843 57.177 140.596 57.177C139.35 57.177 138.34 58.1834 138.34 59.4249C138.34 60.6663 139.35 61.6727 140.596 61.6727Z"
                        fill="white"
                    />
                    <path
                        d="M26.1503 34.2308C30.687 34.2308 34.3648 30.5672 34.3648 26.0478C34.3648 21.5284 30.687 17.8647 26.1503 17.8647C21.6135 17.8647 17.9358 21.5284 17.9358 26.0478C17.9358 30.5672 21.6135 34.2308 26.1503 34.2308Z"
                        fill="white"
                    />
                    <path
                        d="M16.429 17.8647H8.21449C8.21449 17.8647 0 18.6891 0 26.8724V34.2464H7.80828C7.80828 34.2464 16.444 34.2464 16.444 26.0631V17.8647H16.429Z"
                        fill="white"
                    />
                    <path
                        d="M34.3648 0H26.1503C26.1503 0 17.9358 0.824304 17.9358 9.00739V16.3812H25.7441C25.7441 16.3812 34.3798 16.3812 34.3798 8.19807V0H34.3648Z"
                        fill="white"
                    />
                    <path
                        d="M0 0V8.18304C0 8.18304 0.827467 16.3661 9.04196 16.3661H16.444V8.60269C16.444 8.60269 16.444 0 8.22954 0H0Z"
                        fill="white"
                    />
                    <path
                        d="M63.792 49.6376H58.5865L44.7603 34.3208V49.6376H40.5026V17.7451H44.7603V32.1776L58.1051 17.7451H63.3106L49.1985 33.2417L63.792 49.6376Z"
                        fill="white"
                    />
                    <path d="M66.8318 17.7451H71.0895V49.623H66.8318V17.7451Z" fill="white" />
                    <path
                        d="M96.1693 17.7451H100.427V49.623H96.9968L80.5377 25.8083V49.623H76.28V17.7451H79.5749L96.1693 41.6947V17.7451Z"
                        fill="white"
                    />
                    <path
                        d="M133.313 45.3964C130.094 48.6188 126.167 50.2224 121.533 50.2224C116.899 50.2224 112.988 48.6188 109.783 45.3964C106.578 42.1741 104.984 38.2774 104.984 33.6912C104.984 29.0751 106.578 25.1633 109.783 21.956C112.988 18.7487 116.899 17.145 121.533 17.145C126.167 17.145 130.094 18.7487 133.313 21.956C136.533 25.1633 138.143 29.0751 138.143 33.6912C138.143 38.2774 136.533 42.1741 133.313 45.3964ZM112.747 42.5039C115.109 44.8869 118.043 46.0859 121.548 46.0859C125.053 46.0859 127.987 44.9019 130.349 42.5039C132.711 40.1208 133.9 37.1833 133.9 33.6912C133.9 30.1692 132.711 27.2166 130.349 24.8336C127.987 22.4506 125.053 21.2516 121.548 21.2516C118.043 21.2516 115.109 22.4506 112.747 24.8336C110.385 27.2166 109.196 30.1692 109.196 33.6912C109.196 37.1833 110.385 40.1208 112.747 42.5039Z"
                        fill="white"
                    />
                    <path
                        d="M152.151 50.2224C149.157 50.2224 146.614 49.518 144.493 48.1242C142.372 46.7303 140.882 44.8119 140.04 42.384L143.695 40.2857C144.944 44.1375 147.788 46.0709 152.241 46.0709C154.437 46.0709 156.107 45.6213 157.266 44.722C158.424 43.8228 158.996 42.6387 158.996 41.14C158.996 39.6263 158.409 38.4872 157.266 37.7228C156.107 36.9585 154.167 36.1642 151.459 35.3099C150.135 34.8602 149.112 34.5005 148.404 34.2607C147.697 34.0209 146.81 33.6313 145.772 33.1067C144.719 32.5821 143.936 32.0276 143.41 31.4731C142.898 30.9185 142.432 30.1692 142.01 29.2699C141.604 28.3557 141.394 27.3215 141.394 26.1675C141.394 23.4098 142.372 21.2066 144.327 19.588C146.283 17.9693 148.66 17.145 151.459 17.145C153.986 17.145 156.198 17.7895 158.063 19.0634C159.944 20.3374 161.343 22.0309 162.291 24.1142L158.725 26.1675C157.356 22.8852 154.934 21.2516 151.459 21.2516C149.728 21.2516 148.314 21.6712 147.246 22.5255C146.178 23.3798 145.651 24.5339 145.651 25.9876C145.651 27.3815 146.148 28.4456 147.156 29.18C148.164 29.9144 149.894 30.6637 152.376 31.4581C153.249 31.7578 153.866 31.9826 154.242 32.1175C154.618 32.2524 155.19 32.4472 155.972 32.732C156.754 33.0018 157.326 33.2416 157.687 33.4214C158.048 33.6013 158.545 33.8561 159.177 34.2008C159.808 34.5455 160.26 34.8602 160.576 35.16C160.877 35.4597 161.238 35.8344 161.644 36.284C162.05 36.7187 162.351 37.1683 162.532 37.6329C162.712 38.0826 162.878 38.6071 163.013 39.2066C163.148 39.8061 163.224 40.4356 163.224 41.095C163.224 43.8827 162.201 46.1158 160.155 47.7645C158.108 49.3981 155.445 50.2224 152.151 50.2224Z"
                        fill="white"
                    />
                    <path
                        d="M187.927 49.6381L185.309 42.4891H170.911L168.294 49.6381H163.765L175.696 17.7598H180.495L192.426 49.6381H187.927ZM172.371 38.5174H183.865L178.118 22.7806L172.371 38.5174Z"
                        fill="white"
                    />
                    <path
                        d="M47.1361 54.1792H48.5503V64.6701H47.1361V59.9492H41.9005V64.6701H40.4712V54.1792H41.9005V58.6304H47.1361V54.1792Z"
                        fill="white"
                    />
                    <path
                        d="M51.5433 63.3513H56.5382V64.6701H50.114V54.1792H56.4629V55.4981H51.5433V58.7203H56.0868V60.0242H51.5433V63.3513Z"
                        fill="white"
                    />
                    <path
                        d="M66.1187 64.6701L65.2461 62.3172H60.4017L59.5291 64.6701H58.0095L62.0265 54.1792H63.6363L67.6533 64.6701H66.1187ZM60.8831 61.0133H64.7496L62.8088 55.8278L60.8831 61.0133Z"
                        fill="white"
                    />
                    <path
                        d="M70.5006 63.3513H75.1494V64.6701H69.0713V54.1792H70.5006V63.3513Z"
                        fill="white"
                    />
                    <path
                        d="M81.3185 54.1792V55.4981H78.1289V64.6701H76.7298V55.4981H73.5553V54.1792H81.3185Z"
                        fill="white"
                    />
                    <path
                        d="M89.0965 54.1792H90.5107V64.6701H89.0965V59.9492H83.8609V64.6701H82.4467V54.1792H83.8759V58.6304H89.1115V54.1792H89.0965Z"
                        fill="white"
                    />
                    <path
                        d="M100.394 54.1792L96.5724 60.4288V64.6701H95.1431V60.4138L91.3518 54.1792H92.9466L95.8803 59.1099L98.799 54.1792H100.394Z"
                        fill="white"
                    />
                    <path
                        d="M109.42 59.2298C109.916 59.4546 110.308 59.7844 110.593 60.219C110.879 60.6536 111.03 61.1482 111.03 61.7027C111.03 62.542 110.729 63.2464 110.127 63.8159C109.525 64.3854 108.788 64.6701 107.915 64.6701H103.267V54.1792H107.569C108.412 54.1792 109.119 54.449 109.706 55.0035C110.293 55.558 110.578 56.2324 110.578 57.0417C110.593 57.9709 110.202 58.6903 109.42 59.2298ZM107.569 55.4831H104.696V58.6903H107.569C108.021 58.6903 108.397 58.5404 108.713 58.2257C109.014 57.911 109.179 57.5363 109.179 57.0867C109.179 56.6521 109.029 56.2774 108.713 55.9627C108.397 55.6329 108.021 55.4831 107.569 55.4831ZM107.915 63.3663C108.397 63.3663 108.803 63.2014 109.134 62.8717C109.465 62.542 109.631 62.1373 109.631 61.6577C109.631 61.1931 109.465 60.7885 109.134 60.4588C108.803 60.1291 108.397 59.9642 107.931 59.9642H104.711V63.3663H107.915Z"
                        fill="white"
                    />
                    <path
                        d="M118.932 64.6701L118.059 62.3172H113.215L112.342 64.6701H110.823L114.84 54.1792H116.45L120.467 64.6701H118.932ZM113.696 61.0133H117.563L115.622 55.8278L113.696 61.0133Z"
                        fill="white"
                    />
                    <path
                        d="M127.656 64.6697L125.249 60.6534H122.706V64.6697H121.277V54.1792H125.58C126.497 54.1792 127.295 54.4939 127.942 55.1383C128.604 55.7678 128.92 56.5471 128.92 57.4463C128.92 58.1206 128.709 58.7501 128.303 59.3046C127.882 59.8591 127.355 60.2637 126.693 60.4885L129.236 64.6847H127.656V64.6697ZM122.706 55.483V59.3945H125.58C126.106 59.3945 126.573 59.1997 126.934 58.825C127.31 58.4354 127.49 57.9708 127.49 57.4313C127.49 56.8918 127.31 56.4272 126.934 56.0525C126.558 55.6778 126.106 55.483 125.58 55.483H122.706Z"
                        fill="white"
                    />
                    <path
                        d="M159.536 54.1792V55.513H156.376V64.8048H154.977V55.513H151.833V54.1792H159.536Z"
                        fill="white"
                    />
                    <path
                        d="M167.269 64.8048L164.877 60.7434H162.365V64.8048H160.95V54.1792H165.223C166.141 54.1792 166.923 54.4939 167.57 55.1384C168.217 55.7828 168.548 56.5621 168.548 57.4613C168.548 58.1507 168.337 58.7801 167.931 59.3496C167.525 59.9191 166.983 60.3088 166.336 60.5486L168.849 64.8048H167.269ZM162.365 55.498V59.4546H165.208C165.735 59.4546 166.186 59.2597 166.562 58.8701C166.938 58.4804 167.119 58.0158 167.119 57.4613C167.119 56.9218 166.938 56.4422 166.562 56.0675C166.186 55.6779 165.735 55.498 165.208 55.498H162.365Z"
                        fill="white"
                    />
                    <path
                        d="M177.275 64.8048L176.403 62.4219H171.603L170.731 64.8048H169.226L173.198 54.1792H174.793L178.765 64.8048H177.275ZM172.1 61.1031H175.936L174.025 55.8577L172.1 61.1031Z"
                        fill="white"
                    />
                    <path d="M180.057 54.1792H181.471V64.8048H180.057V54.1792Z" fill="white" />
                    <path
                        d="M190.589 54.1792V55.513H187.429V64.8048H186.03V55.513H182.886V54.1792H190.589Z"
                        fill="white"
                    />
                    <path
                        d="M193.405 63.471H198.355V64.8048H191.991V54.1792H198.28V55.513H193.405V58.7801H197.904V60.099H193.405V63.471Z"
                        fill="white"
                    />
                    <path
                        d="M206.809 63.9807C206.072 64.6701 205.109 64.9998 203.935 64.9998C202.762 64.9998 201.799 64.6551 201.047 63.9807C200.295 63.2913 199.933 62.3771 199.933 61.2381V54.1792H201.348V61.1781C201.348 61.9275 201.573 62.527 202.025 62.9616C202.476 63.3962 203.108 63.621 203.95 63.621C204.778 63.621 205.425 63.3962 205.876 62.9616C206.328 62.527 206.553 61.9275 206.553 61.1781V54.1792H207.952V61.2381C207.922 62.3771 207.561 63.2913 206.809 63.9807Z"
                        fill="white"
                    />
                    <path
                        d="M216.422 64.8048L214.03 60.7434H211.517V64.8048H210.103V54.1792H214.376C215.294 54.1792 216.076 54.4939 216.723 55.1384C217.37 55.7828 217.701 56.5621 217.701 57.4613C217.701 58.1507 217.49 58.7801 217.084 59.3496C216.678 59.9191 216.136 60.3088 215.489 60.5486L218.002 64.8048H216.422ZM211.502 55.498V59.4546H214.346C214.872 59.4546 215.324 59.2597 215.7 58.8701C216.076 58.4804 216.257 58.0158 216.257 57.4613C216.257 56.9218 216.076 56.4422 215.7 56.0675C215.324 55.6779 214.872 55.498 214.346 55.498H211.502Z"
                        fill="white"
                    />
                </svg>
                <HorairesSection>
                    <HorairesText>{formatText(horaires.titre)}</HorairesText>
                    <HorairesText>{formatText(horaires.ouverture)}</HorairesText>
                </HorairesSection>
                <ContactSection>
                    <HorairesText>Contact</HorairesText>
                    <ContactText href="tel:+33646193773">06 46 19 37 73</ContactText>
                    <ContactText href="mailto:contact@kinosa.fr">contact@kinosa.fr</ContactText>
                </ContactSection>
                <PdvSection>
                    <HorairesText>Restaurant sur place ou à emporter</HorairesText>
                    Du lundi au vendredi de 10h à 15h30
                    <PdvText href="https://goo.gl/maps/rD6LGTSCuenwou9s9">
                        90, rue Maryam Mirzakhani <br /> 34000 Montpellier
                    </PdvText>
                </PdvSection>
                <SocialSection>
                    <SocialLogoContainer>
                        {data.social.social.map((logo: any) => (
                            <a key={logo.id} href={logo.lien} target="_blank" rel="noreferrer">
                                <SocialLogo name={logo.nom} isFooter isMenu={false} />
                            </a>
                        ))}
                    </SocialLogoContainer>
                </SocialSection>
                <MenuContainer>
                    <Link href="/contact">
                        <MenuText>Commandes / Contact</MenuText>
                    </Link>
                    <Link href="/legals">
                        <MenuText>Mentions Légales</MenuText>
                    </Link>
                    <Link href="/sitemap.xml">
                        <MenuText>Plan du site</MenuText>
                    </Link>
                </MenuContainer>
                <MessengerPlugin
                    pageId="1934629010132381"
                    showDialog={showDialog}
                    version="10.0"
                    language="fr_FR"
                />
            </FooterContainer>
        </footer>
    );
}
