import React, { useEffect, useState } from 'react';
import {
    Img,
    SliderButtonContainer,
    SliderButtonWrapper,
    SliderContainer,
    SliderSection,
    Svg
} from 'styles/Concept/Slider.style';

export default function Slider({ data }) {
    const [index, setIndex] = useState(0);
    const [displayedImages, setDisplayedImages] = useState([]);

    const slideHandler = (id: number) => {
        if (id === -1) {
            id = data.length - 1;
        } else if (id === data.length) {
            id = 0;
        }
        setIndex(() => id);
    };

    useEffect(() => {
        const imgs = [];
        for (let i = 0; i < 3; i++) {
            imgs.push(data[(index + i) % data.length]);
        }
        setDisplayedImages(() => imgs);
    }, [index]);
    return (
        <SliderSection>
            <SliderContainer>
                {displayedImages.map((image: any, i: number) => (
                    <Img
                        key={image.id}
                        src={image.url}
                        alt={image.alt || 'image du site'}
                        onClick={() => slideHandler(index + i)}
                    />
                ))}
            </SliderContainer>
            <SliderButtonContainer>
                <SliderButtonWrapper>
                    <Svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => slideHandler(0)}>
                        <circle
                            cx="12.5"
                            cy="12.5"
                            r="12.5"
                            transform="rotate(-180 12.5 12.5)"
                            fill="#F9BB42"
                        />
                        <path
                            d="M15.6833 8.84443L10.875 11.9406C10.4083 12.2449 10.4083 12.884 10.875 13.1807L15.6833 16.2845C16.2417 16.6344 17 16.2769 17 15.6607L17 9.46823C17 8.85203 16.2417 8.49448 15.6833 8.84443ZM8.66667 16.3682L8.66667 8.76074C8.66667 8.34233 8.29167 8 7.83333 8C7.375 8 7 8.34233 7 8.76074L7 16.3682C7 16.7866 7.375 17.1289 7.83333 17.1289C8.29167 17.1289 8.66667 16.7866 8.66667 16.3682Z"
                            fill="white"
                        />
                    </Svg>
                    <Svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => slideHandler(index - 1)}>
                        <circle
                            cx="12.5"
                            cy="12.5"
                            r="12.5"
                            transform="rotate(-180 12.5 12.5)"
                            fill="#F9BB42"
                        />
                        <path
                            d="M14.3732 8.16277L8.43243 11.8263C7.85586 12.1864 7.85586 12.9425 8.43243 13.2936L14.3732 16.9661C15.0631 17.3802 16 16.9571 16 16.228L16 8.90088C16 8.17177 15.0631 7.7487 14.3732 8.16277Z"
                            fill="white"
                        />
                    </Svg>
                </SliderButtonWrapper>
                <SliderButtonWrapper>
                    <Svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => slideHandler(index + 1)}>
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#F9BB42" />
                        <path
                            d="M10.6268 16.9663L16.5676 13.3026C17.1441 12.9426 17.1441 12.1865 16.5676 11.8354L10.6268 8.16277C9.93694 7.7487 9 8.17177 9 8.90089L9 16.2281C9 16.9573 9.93693 17.3803 10.6268 16.9663Z"
                            fill="white"
                        />
                    </Svg>
                    <Svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => slideHandler(data.length - 1)}>
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#F9BB42" />
                        <path
                            d="M9.31667 16.2846L14.125 13.1883C14.5917 12.884 14.5917 12.245 14.125 11.9483L9.31667 8.84444C8.75833 8.49449 8 8.85204 8 9.46825V15.6608C8 16.277 8.75833 16.6345 9.31667 16.2846ZM16.3333 8.76075V16.3683C16.3333 16.7867 16.7083 17.129 17.1667 17.129C17.625 17.129 18 16.7867 18 16.3683V8.76075C18 8.34234 17.625 8 17.1667 8C16.7083 8 16.3333 8.34234 16.3333 8.76075Z"
                            fill="white"
                        />
                    </Svg>
                </SliderButtonWrapper>
            </SliderButtonContainer>
        </SliderSection>
    );
}
