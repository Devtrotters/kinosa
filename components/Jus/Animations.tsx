import formatText from 'lib/formatText';
import { useState } from 'react';
import {
    AnimationsContainer,
    AnimationsContent,
    AnimationsImage,
    AnimationsSubContainer,
    AnimationsSubText,
    AnimationsSubTitle,
    AnimationsTitle
} from 'styles/Jus/Animations.style';

export default function Animations({ data }) {
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
        <AnimationsContainer>
            <AnimationsTitle>Nos Animations</AnimationsTitle>
            <AnimationsContent>
                {data.contenu.map((el: any) => (
                    <AnimationsSubContainer key={el.id}>
                        <AnimationsSubTitle className={subtextOpen === el.id ? 'open' : ''}>
                            {formatText(el.titre)}
                        </AnimationsSubTitle>
                        <AnimationsSubText className={subtextOpen === el.id ? 'open' : ''}>
                            {formatText(el.texte)}
                        </AnimationsSubText>

                        <AnimationsImage
                            key={el.image.id}
                            src={el.image.url}
                            alt={el.image.alt || 'image du site'}
                        />
                    </AnimationsSubContainer>
                ))}
            </AnimationsContent>
        </AnimationsContainer>
    );
}
