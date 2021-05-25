import formatText from 'lib/formatText';
import Link from 'next/link';
import { Command, CommandContainer, CommandH2 } from 'styles/CommandComponent.style';
import { Button } from 'styles/UI/Buttons.style';

export default function CommandComponent({ data }) {
    const commandHandler = () => {
        // const leatsyCollection = document.getElementsByClassName('fb_customer_chat_bounce_out_v2');
        // console.log(leatsyCollection);
        // const leatsy = leatsyCollection[0];
        // console.log(leatsy);
        // leatsy.classList.remove('fb_customer_chat_bounce_out_v2');
        // leatsy.classList.add('fb_customer_chat_bounce_in_v2');
        //leatsy.style = "padding: 0px; position: fixed; z-index: 2147483646; border-radius: 16px; top: auto; width: 399px; background: none; bottom: 85px; max-height: calc(100% - 80px); right: 4px; margin-right: 12px; min-height: 360px; height: 509px;"
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
