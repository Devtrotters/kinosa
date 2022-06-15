import formatText from 'lib/formatText';
import {
    GerantContainer,
    GerantImg,
    GerantImgWrapper,
    GerantName,
    GerantNameContainer,
    GerantPresentationContainer,
    GerantText,
    PresentationContainer,
    SocialContainer
} from 'styles/Concept/Presentation.style';
import { Text } from 'styles/UI/Texts.style';

import SocialLogo from '../SocialLogo';

export default function Equipe({ data }) {
    return (
        <PresentationContainer>
            {data.map((gerant: any) => (
                <GerantContainer key={gerant.id}>
                    <GerantImgWrapper className="image">
                        <GerantImg
                            src={gerant.image.url}
                            alt={gerant.image.alt || 'image du site'}
                        />
                    </GerantImgWrapper>
                    <GerantPresentationContainer>
                        <GerantNameContainer>
                            <GerantName>{formatText(gerant.nom)}</GerantName>
                            <Text>{formatText(gerant.fonction)}</Text>
                        </GerantNameContainer>
                        {/*<SocialContainer>*/}
                        {/*    {gerant.social.map((social: any) => (*/}
                        {/*        <a*/}
                        {/*            key={social.id}*/}
                        {/*            href={social.lien}*/}
                        {/*            target="_blank"*/}
                        {/*            rel="noreferrer">*/}
                        {/*            <SocialLogo name={social.nom} isFooter={false} isMenu={false} />*/}
                        {/*        </a>*/}
                        {/*    ))}*/}
                        {/*</SocialContainer>*/}
                        <aside>
                            <GerantText>{formatText(gerant.presentation)}</GerantText>
                        </aside>
                    </GerantPresentationContainer>
                </GerantContainer>
            ))}
        </PresentationContainer>
    );
}
