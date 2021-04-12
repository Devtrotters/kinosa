import { Button } from 'styles/UI/Buttons.style';
import { Container } from 'styles/UI/Test.style';
import { BigText, MediumText, Subtitle, Text, Title } from 'styles/UI/Texts.style';

// TODO : Delete all ui pages

export default function ui() {
    return (
        <Container>
            <Title>H1</Title>
            <Subtitle>H2</Subtitle>
            <BigText>Big Text</BigText>
            <MediumText>Medium Text</MediumText>
            <Text>Texte</Text>
            <Button>Découvrir</Button>
        </Container>
    );
}
