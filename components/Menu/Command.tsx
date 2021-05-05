import CommandComponent from 'components/CommandComponent';
import { CommandSection, CommandText } from 'styles/Menu/Command.style';

export default function Command({ command }) {
    return (
        <CommandSection id="commandes">
            <CommandText>Composez votre repas en quelques clics</CommandText>
            <CommandComponent data={command} />
        </CommandSection>
    );
}
