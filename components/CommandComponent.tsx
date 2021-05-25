import formatText from 'lib/formatText';
import Link from 'next/link';
import { useContext } from 'react';
import { Command, CommandContainer, CommandH2 } from 'styles/CommandComponent.style';
import { Button } from 'styles/UI/Buttons.style';

import ShowDialogContext from '../context/ShowDialogContext';

export default function CommandComponent({ data }) {
    const { showDialog, setShowDialog } = useContext(ShowDialogContext);

    const commandHandler = () => {
        const leatsyCollection = document.getElementsByClassName(
            'fb_customer_chat_bounce_out_v2'
        ) as HTMLCollectionOf<HTMLElement>;
        console.log(leatsyCollection);
        const leatsy = leatsyCollection[0];
        console.log(leatsy);
        leatsy.classList.remove('fb_customer_chat_bounce_out_v2');
        leatsy.classList.add('fb_customer_chat_bounce_in_v2');
        // leatsy.style.maxHeight = 'calc(100 % - 80px)';
        // leatsy.style.minHeight = '360px';

        console.log(showDialog);
        setShowDialog(true);
    };
    return (
        <Command>
            {data.map((el: any, i: number) => (
                <CommandContainer key={el.id} url={el.image.url}>
                    <CommandH2>{formatText(el.titre)}</CommandH2>
                    {i === 0 && (el.lien === '' || el.lien === '/') ? (
                        <button onClick={() => commandHandler()}>{formatText(el.button)}</button>
                    ) : (
                        <Link href={el.lien}>
                            <Button>
                                {formatText(el.button)}
                                <span>{'>'}</span>
                            </Button>
                        </Link>
                    )}
                </CommandContainer>
            ))}
        </Command>
    );
}
