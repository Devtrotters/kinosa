import ExternalLinks from 'components/ExternalLinks';
import formatText from 'lib/formatText';
import Link from 'next/link';
import {
    ConceptButton,
    ConceptSection,
    ConceptSubtitle,
    ConceptText,
    ConceptWrapper,
    GerantArticle,
    GerantImg,
    GerantImgContainer,
    GerantText,
    GerantWrapper
} from 'styles/Home/Concept.style';
import { Title } from 'styles/UI/Texts.style';

export default function Concept({ data, ExternalData }) {
    return (
        <ConceptSection>
            <ConceptWrapper>
                <Title>{formatText(data.titre)}</Title>
                <ConceptSubtitle>{formatText(data.sousTitre)}</ConceptSubtitle>
                {data.texte.map((text: any) => (
                    <ConceptText key={text.id}>{formatText(text.texte)}</ConceptText>
                ))}
                <Link href={data.lienBouton}>
                    <ConceptButton>
                        <span>{formatText(data.bouton)}</span>
                        <span>{'>'}</span>
                    </ConceptButton>
                </Link>
            </ConceptWrapper>
            <GerantArticle>
                {data.gerant.map((gerant: any) => (
                    <GerantWrapper key={gerant.id}>
                        <GerantImgContainer>
                            <GerantImg
                                src={gerant.image.url}
                                alt={gerant.image.alt || 'image du site'}
                            />
                        </GerantImgContainer>
                        <GerantText>{formatText(gerant.texte)}</GerantText>
                    </GerantWrapper>
                ))}
            </GerantArticle>
            <ExternalLinks data={ExternalData} displayLine={false} />
        </ConceptSection>
    );
}
