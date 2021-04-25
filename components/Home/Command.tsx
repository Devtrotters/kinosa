import CommandComponent from 'components/CommandComponent';
import ExternalLinks from 'components/ExternalLinks';
import { CommandSection, SubtitleGrid } from 'styles/Home/Command.style';
import { Text, Title } from 'styles/UI/Texts.style';

export default function Command({ command, ExternalData }) {
    const data = {
        titre: "Kin'Commande",
        sousTitres: [
            {
                id: 1,
                text:
                    'Trop de travail ou peu de temps pour manger ? Vous pouvez commander tout ce qui vous fait envie et le consommer sur place ou à emporter !'
            },
            {
                id: 2,
                text:
                    "Envie d'un bon repas qui vienne directement à vous? N’hésitez pas à commander en ligne avec nos partenaires Uber Eats et Deliveroo."
            }
        ]
    };
    return (
        <CommandSection>
            <Title>{data.titre}</Title>
            <SubtitleGrid>
                {data.sousTitres.map((sousTitre) => (
                    <Text key={sousTitre.id}>{sousTitre.text}</Text>
                ))}
            </SubtitleGrid>

            <CommandComponent data={command.typeCommand} />
            <ExternalLinks data={ExternalData} displayLine={true} />
        </CommandSection>
    );
}
