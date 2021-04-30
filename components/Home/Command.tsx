import CommandComponent from 'components/CommandComponent';
import ExternalLinks from 'components/ExternalLinks';
import { CommandSection, SubtitleGrid } from 'styles/Home/Command.style';
import { Text, Title } from 'styles/UI/Texts.style';

export default function Command({ data, command, ExternalData }) {
    return (
        <CommandSection>
            <Title>{data.titre}</Title>
            <SubtitleGrid>
                {data.texte.map((texte) => (
                    <Text key={texte.id}>{texte.texte}</Text>
                ))}
            </SubtitleGrid>

            <CommandComponent data={command.typeCommand} />
            <ExternalLinks data={ExternalData} displayLine={true} />
        </CommandSection>
    );
}
