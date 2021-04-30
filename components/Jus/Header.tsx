import { useState } from 'react';
import {
    HeaderButton,
    HeaderContainer,
    HeaderImage,
    HeaderImageContainer,
    HeaderSubContainer,
    HeaderSubText,
    HeaderSubTitle,
    HeaderText,
    HeaderTitle
} from 'styles/Jus/Header.style';

export default function Header({ data }) {
    const [subtextOpen, setSubtextOpen] = useState(null);
    const handleClick = (id) => {
        setSubtextOpen(() => {
            if (id === subtextOpen) {
                return null;
            } else {
                return id;
            }
        });
    };

    return (
        <HeaderContainer key={data.id}>
            <div>
                <HeaderTitle>{data.titre}</HeaderTitle>
                <HeaderText>{data.texte}</HeaderText>

                {data.presentation.map((el: any) => (
                    <HeaderSubContainer key={el.id}>
                        <HeaderSubTitle className={subtextOpen === el.id ? 'open' : ''}>
                            {el.titre}
                            <HeaderButton
                                className={subtextOpen === el.id ? 'open' : ''}
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => {
                                    handleClick(el.id);
                                }}>
                                <circle
                                    cx="12.5"
                                    cy="12.5"
                                    r="12.5"
                                    transform="rotate(90 12.5 12.5)"
                                    fill="#007A0C"
                                />
                                <path
                                    d="M8.16277 10.6268L11.8263 16.5676C12.1864 17.1441 12.9425 17.1441 13.2936 16.5676L16.9661 10.6268C17.3802 9.93694 16.9571 9 16.228 9L8.90088 9C8.17177 9 7.7487 9.93694 8.16277 10.6268Z"
                                    fill="white"
                                />
                            </HeaderButton>
                        </HeaderSubTitle>
                        <HeaderSubText className={subtextOpen === el.id ? 'open' : ''}>
                            {el.texte}
                        </HeaderSubText>
                    </HeaderSubContainer>
                ))}
            </div>
            <HeaderImageContainer>
                {data.images.map((img: any) => (
                    <HeaderImage
                        key={img.id}
                        src={img.url}
                        alt={img.alt ? img.alt : 'image du site'}
                    />
                ))}
            </HeaderImageContainer>
        </HeaderContainer>
    );
}
