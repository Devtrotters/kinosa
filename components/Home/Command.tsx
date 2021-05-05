import CommandComponent from 'components/CommandComponent';
import ExternalLinks from 'components/ExternalLinks';
import formatText from 'lib/formatText';
import { CommandSection, SubtitleGrid } from 'styles/Home/Command.style';
import { Text, Title } from 'styles/UI/Texts.style';

export default function Command({ data, command, ExternalData }) {
    return (
        <CommandSection>
            <Title>{formatText(data.titre)}</Title>
            <SubtitleGrid>
                {data.texte.map((texte: any) => (
                    <Text key={texte.id}>{formatText(texte.texte)}</Text>
                ))}
            </SubtitleGrid>

            <CommandComponent data={command.typeCommand} />
            <ExternalLinks data={ExternalData} displayLine={true} />
        </CommandSection>
    );
}
