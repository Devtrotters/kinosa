import CommandComponent from 'components/CommandComponent';
import { CommandSection, CommandText } from 'styles/Menu/Command.style';

export default function Command({ command }) {
    return (
        <CommandSection id="commandes">
            <CommandComponent data={command} />
        </CommandSection>
    );
}
