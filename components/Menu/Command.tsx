import CommandComponent from 'components/CommandComponent';
import formatText from 'lib/formatText';
import { CommandSection, SubtitleGrid } from 'styles/Menu/Command.style';
import { Text, Title } from 'styles/UI/Texts.style';

export default function Command({ command, data }) {
    return (
        <CommandSection id="commandes">
            <Title as="h2">{formatText(data.titre)}</Title>
            <SubtitleGrid>
                {data.texte.map((texte: any) => (
                    <Text key={texte.id}>{formatText(texte.texte)}</Text>
                ))}
            </SubtitleGrid>
            <CommandComponent data={command} />
        </CommandSection>
    );
}
