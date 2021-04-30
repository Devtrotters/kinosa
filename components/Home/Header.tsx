import Link from 'next/link';
import {
    HeaderContainer,
    HeaderTitle,
    Hook,
    HookButton,
    HookContainer,
    HookText,
    HookTitle
} from 'styles/Home/Header.style';

export default function Header({ data }) {
    return (
        <HeaderContainer>
            <HookContainer>
                <HeaderTitle>{data.titre}</HeaderTitle>
                {data.hook.map((el: any) => (
                    <Hook key={el.id} url={el.image.url}>
                        <HookTitle>{el.titre}</HookTitle>
                        <HookText>{el.sousTitre}</HookText>
                        <Link href={el.lien}>
                            <HookButton>
                                {el.button}
                                <span>{'>'}</span>
                            </HookButton>
                        </Link>
                    </Hook>
                ))}
            </HookContainer>
        </HeaderContainer>
    );
}
