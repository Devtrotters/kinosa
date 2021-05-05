import formatText from 'lib/formatText';
import {
    HeaderContainer,
    HeaderContent,
    HeaderImage,
    HeaderSection,
    HeaderText,
    HeaderTitle
} from 'styles/Menu/Header.style';

export default function Header({ data }) {
    return (
        <HeaderSection>
            <HeaderContainer>
                <HeaderContent>
                    <HeaderTitle>{formatText(data.titre)}</HeaderTitle>
                    {data.texte.map((text: any) => (
                        <HeaderText key={text.id}>{formatText(text.texte)}</HeaderText>
                    ))}
                </HeaderContent>
                <HeaderImage src={data.image.url} alt={data.image.alt} />
            </HeaderContainer>
        </HeaderSection>
    );
}
