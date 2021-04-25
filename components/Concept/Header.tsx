import { HeaderContainer, HeaderText, HeaderTitle } from 'styles/Concept/Header.style';

export default function Header({ data }) {
    return (
        <HeaderContainer urlMobile={data.imageMobile.url} url={data.image.url}>
            <HeaderTitle>{data.titre}</HeaderTitle>
            {data.texte.map((text: any) => (
                <HeaderText key={text.id}>{text.texte}</HeaderText>
            ))}
        </HeaderContainer>
    );
}
