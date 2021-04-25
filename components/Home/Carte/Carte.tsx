import parse from 'html-react-parser';
import {
    BlocPlat,
    BlocPlatContainer,
    BlocPlatImg,
    CarteButton,
    CarteSection,
    CarteSubTitle,
    CarteTextContainer,
    CarteWrapper
} from 'styles/Home/Carte/Carte.style';
import { Text, Title } from 'styles/UI/Texts.style';

import Menu from './Menu';

export default function Carte({ data, products, categories }) {
    return (
        <CarteSection>
            <CarteWrapper>
                <CarteTextContainer>
                    <div>
                        <Title>{data.titre}</Title>
                        <CarteSubTitle>{data.sousTitre}</CarteSubTitle>
                    </div>
                    <CarteButton>
                        {data.button}
                        <span>{'>'}</span>
                    </CarteButton>
                </CarteTextContainer>
                <BlocPlatContainer>
                    {data.presentation.map((blocPlat: any) => (
                        <BlocPlat key={blocPlat.id}>
                            <BlocPlatImg
                                src={blocPlat.image.url}
                                alt={blocPlat.image.alt || 'image du site'}
                            />
                            <Text>{parse(blocPlat.texte)}</Text>
                        </BlocPlat>
                    ))}
                </BlocPlatContainer>
            </CarteWrapper>
            <Menu categories={categories} products={products} />
        </CarteSection>
    );
}
