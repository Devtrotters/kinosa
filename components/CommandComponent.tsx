import formatText from 'lib/formatText';
import Link from 'next/link';
import { Command, CommandContainer, CommandH2 } from 'styles/CommandComponent.style';
import { Button } from 'styles/UI/Buttons.style';

export default function CommandComponent({ data }) {
    return (
        <Command>
            {data.map((el: any) => (
                <CommandContainer key={el.id} url={el.image.url}>
                    <CommandH2>{formatText(el.titre)}</CommandH2>
                    <Link href={el.lien}>
                        <Button>
                            {formatText(el.button)}
                            <span>{'>'}</span>
                        </Button>
                    </Link>
                </CommandContainer>
            ))}
        </Command>
    );
}
