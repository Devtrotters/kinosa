import formatText from 'lib/formatText';
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
        const leatsy = leatsyCollection[0];
        leatsy.style.maxHeight = 'calc(100 % - 80px)';
        leatsy.style.minHeight = '360px';

        setShowDialog(true);
    };
    return (
        <Command>
            {data.map((el: any, i: number) => (
                <CommandContainer key={el.id} url={el.image.url}>
                    <CommandH2>{formatText(el.titre)}</CommandH2>
                    <Button href={el.lien} target="_blank">
                        {formatText(el.button)}
                        <span>{'>'}</span>
                    </Button>
                </CommandContainer>
            ))}
        </Command>
    );
}
