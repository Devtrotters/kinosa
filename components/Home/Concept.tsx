import ExternalLinks from 'components/ExternalLinks';
import React, { useState } from 'react';
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
    const [selected, setSelected] = useState(data.gerant[0].id);

    const handleClick = (e: any, id: number) => {
        e.preventDefault();
        setSelected(id);
    };
    return (
        <ConceptSection>
            <ConceptWrapper>
                <Title>{data.titre}</Title>
                <ConceptSubtitle>{data.sousTitre}</ConceptSubtitle>
                {data.texte.map((text: any) => (
                    <ConceptText key={text.id}>{text.texte}</ConceptText>
                ))}
                <ConceptButton>
                    <span>{data.bouton}</span>
                    <span>{'>'}</span>
                </ConceptButton>
            </ConceptWrapper>
            <GerantArticle>
                {data.gerant.map((gerant: any) => (
                    <GerantWrapper key={gerant.id}>
                        <GerantImgContainer>
                            <GerantImg
                                className={selected === gerant.id ? 'selected' : ''}
                                src={gerant.image.url}
                                alt={gerant.image.alt || 'image du site'}
                                onClick={(e) => handleClick(e, gerant.id)}
                            />
                        </GerantImgContainer>
                        <GerantText className={selected === gerant.id ? 'selected' : ''}>
                            {gerant.texte}
                        </GerantText>
                    </GerantWrapper>
                ))}
            </GerantArticle>
            <ExternalLinks data={ExternalData} displayLine={false} />
        </ConceptSection>
    );
}
