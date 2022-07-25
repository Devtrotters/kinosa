import formatText from 'lib/formatText';
import React, { createRef, useEffect, useRef, useState } from 'react';
import {
    CreationItem,
    CreationsContainer,
    CreationsImage,
    CreationsImageContainer,
    CreationsImageText,
    CreationsImageTextContainer,
    CreationsImageTitle,
    CreationsItemTitle,
    CreationsItemWrapper,
    CreationsSliderButton,
    CreationsSliderHeaderContainer,
    CreationsSliderText,
    CreationsSliderTextContainer,
    CreationsText,
    CreationsTitle
} from 'styles/Jus/Creations.style';

export default function Creations({ headerData, data }) {
    const saisons = data.map((saison: any) => saison.id);
    const [saisonsVisibles, setSaisonsVisibles] = useState([0, 1]);
    const [selectedItem, setselectedItem] = useState(0);

    const creations = [data[selectedItem]];

    const handleSelectedItem = (id: number) => {
        const creationsWrapper = document.getElementById('creationsWrapper');
        creationsWrapper.style.opacity = '0';
        const timer = setTimeout(() => {
            setselectedItem(id);
            creationsWrapper.style.opacity = '1';
        }, 400);
    };
    const handleClick = (param: string) => {
        const max = saisons.length - 1;
        const min = 0;

        const sliderText = document.getElementById('sliderText');

        if (param === 'increase') {
            if (saisonsVisibles[0] == max && saisonsVisibles[1] == min) {
                sliderText.style.flexDirection = 'row';
                setSaisonsVisibles([min, min + 1]);
                handleSelectedItem(min);
            } else if (saisonsVisibles[0] == max - 1 && saisonsVisibles[1] == max) {
                sliderText.style.flexDirection = 'row-reverse';
                setSaisonsVisibles([max, min]);
                handleSelectedItem(saisonsVisibles[0] + 1);
            } else {
                setSaisonsVisibles([saisonsVisibles[0] + 1, saisonsVisibles[1] + 1]);
                handleSelectedItem(saisonsVisibles[0] + 1);
            }
        } else if (param === 'decrease') {
            if (saisonsVisibles[0] == min && saisonsVisibles[1] == min + 1) {
                sliderText.style.flexDirection = 'row-reverse';
                setSaisonsVisibles([max, min]);
                handleSelectedItem(max);
            } else if (saisonsVisibles[0] == max && saisonsVisibles[1] == min) {
                sliderText.style.flexDirection = 'row';
                setSaisonsVisibles([max - 1, max]);
                handleSelectedItem(saisonsVisibles[0] - 1);
            } else {
                setSaisonsVisibles([saisonsVisibles[0] - 1, saisonsVisibles[1] - 1]);
                handleSelectedItem(saisonsVisibles[0] - 1);
            }
        }
    };

    return (
        <CreationsContainer>
            <CreationsTitle as="h2">{formatText(headerData.titre)}</CreationsTitle>
            <CreationsSliderHeaderContainer>
                <CreationsSliderButton
                    onClick={() => {
                        handleClick('decrease');
                    }}
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                        cx="12.5"
                        cy="12.5"
                        r="12.5"
                        transform="rotate(-180 12.5 12.5)"
                        fill="#007A0C"
                    />
                    <path
                        d="M14.3732 8.16277L8.43243 11.8263C7.85586 12.1864 7.85586 12.9425 8.43243 13.2936L14.3732 16.9661C15.0631 17.3802 16 16.9571 16 16.228L16 8.90088C16 8.17177 15.0631 7.7487 14.3732 8.16277Z"
                        fill="white"
                    />
                </CreationsSliderButton>
                <CreationsSliderTextContainer id="sliderText">
                    {data.map((el: any, index: number) => (
                        <CreationsSliderText
                            onClick={() => {
                                handleSelectedItem(index);
                            }}
                            key={el.id}
                            className={
                                (selectedItem === index ? 'selected' : '') +
                                (saisonsVisibles.includes(index) ? ' visible' : '')
                            }>
                            {formatText(el.saison)}
                        </CreationsSliderText>
                    ))}
                </CreationsSliderTextContainer>
                <CreationsSliderButton
                    onClick={() => {
                        handleClick('increase');
                    }}
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#007A0C" />
                    <path
                        d="M10.6268 16.8372L16.5676 13.1737C17.1441 12.8136 17.1441 12.0575 16.5676 11.7064L10.6268 8.03386C9.93694 7.61979 9 8.04286 9 8.77197L9 16.0991C9 16.8282 9.93694 17.2513 10.6268 16.8372Z"
                        fill="white"
                    />
                </CreationsSliderButton>
            </CreationsSliderHeaderContainer>
            <CreationsItemWrapper id="creationsWrapper">
                {creations.map((produits: any) =>
                    produits.produits.map((produits: any) => (
                        <CreationItem key={produits.id}>
                            <CreationsItemTitle>{produits.periode}</CreationsItemTitle>
                            {produits.produit.map((produit: any) => (
                                <CreationsImageContainer key={produit.id}>
                                    <CreationsImage
                                        alt={produit.image.alt || 'image du site'}
                                        key={produit.image.id}
                                        src={produit.image.url}
                                    />
                                    <CreationsImageTextContainer>
                                        <CreationsImageTitle>
                                            {formatText(produit.nom)}
                                        </CreationsImageTitle>
                                        <CreationsImageText>
                                            {produit.fruits.map((el: any) => el.nom).join(', ')}
                                        </CreationsImageText>
                                    </CreationsImageTextContainer>
                                </CreationsImageContainer>
                            ))}
                        </CreationItem>
                    ))
                )}
            </CreationsItemWrapper>
            <CreationsText>{formatText(headerData.sousTitre)}</CreationsText>
        </CreationsContainer>
    );
}
