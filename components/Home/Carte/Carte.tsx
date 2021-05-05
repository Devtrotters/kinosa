import formatText from 'lib/formatText';
import Link from 'next/link';
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
                        <Title>{formatText(data.titre)}</Title>
                        <CarteSubTitle>{formatText(data.sousTitre)}</CarteSubTitle>
                    </div>
                    <Link href={data.lienBouton}>
                        <CarteButton>
                            {formatText(data.button)}
                            <span>{'>'}</span>
                        </CarteButton>
                    </Link>
                </CarteTextContainer>
                <BlocPlatContainer>
                    {data.presentation.map((blocPlat: any) => (
                        <BlocPlat key={blocPlat.id}>
                            <BlocPlatImg
                                src={blocPlat.image.url}
                                alt={blocPlat.image.alt || 'image du site'}
                            />
                            <Text>{formatText(blocPlat.texte)}</Text>
                        </BlocPlat>
                    ))}
                </BlocPlatContainer>
            </CarteWrapper>
            <Menu categories={categories} products={products} />
        </CarteSection>
    );
}
