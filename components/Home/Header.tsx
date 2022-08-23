import formatText from 'lib/formatText';
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
    console.log(data);

    return (
        <HeaderContainer>
            <HookContainer>
                <HeaderTitle>{formatText(data.titre)}</HeaderTitle>
                {data.hook.map((el: any) => (
                    <Hook key={el.id} url={el.image}>
                        <HookTitle>{formatText(el.titre)}</HookTitle>
                        <HookText>{formatText(el.sousTitre)}</HookText>
                        <Link href={el.lien}>
                            <HookButton>
                                {formatText(el.button)}
                                <span>{'>'}</span>
                            </HookButton>
                        </Link>
                    </Hook>
                ))}
            </HookContainer>
        </HeaderContainer>
    );
}
