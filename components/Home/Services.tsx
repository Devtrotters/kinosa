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

export default function Services({ data }) {
    return (
        <ConceptSection>
            <ConceptWrapper>
                <Title as="h2">{formatText(data.titre)}</Title>
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
            <GerantImg
                src={data.gerant[0].image.url}
                alt={data.gerant[0].image.alt || 'image du site'}
            />
        </ConceptSection>
    );
}
