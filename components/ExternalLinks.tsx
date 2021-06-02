import formatText from 'lib/formatText';
import { Container, ExternalLink, Grid, Img, Infos, Line } from 'styles/ExternalLinks.style';
import { Subtitle, Text } from 'styles/UI/Texts.style';

export default function ExternalLinks({ data, displayLine }) {
    return (
        <Container>
            <Subtitle>{formatText(data.titre)}</Subtitle>
            {data.sousTitre.length !== 0 && <Infos>{formatText(data.sousTitre)}</Infos>}
            <Grid last={3}>
                {data.liste.map((el: any) => (
                    <article key={el.id}>
                        <ExternalLink href={el.lien || '/'} target="_blank">
                            <Img src={el.logo.url} alt={el.logo.alt || 'logo platform'} />
                            <Text>{formatText(el.nom)}</Text>
                        </ExternalLink>
                    </article>
                ))}
            </Grid>
            {displayLine && <Line />}
        </Container>
    );
}
