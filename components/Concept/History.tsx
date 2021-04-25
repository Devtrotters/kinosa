import {
    Bloc,
    BlocContainer,
    BlocText,
    BlocTextContainer,
    BlocWrapper,
    HistorySection,
    Square
} from 'styles/Concept/History.style';
import { Subtitle, Title } from 'styles/UI/Texts.style';

export default function History({ data }) {
    return (
        <HistorySection>
            <Title>{data.titre}</Title>
            <BlocContainer>
                <BlocWrapper>
                    {data.section.map((bloc: any, i) => {
                        if (i < 2) {
                            return (
                                <Bloc key={bloc.id}>
                                    <Square />
                                    <BlocTextContainer>
                                        <Subtitle>{bloc.titre}</Subtitle>
                                        <BlocText>{bloc.texte}</BlocText>
                                    </BlocTextContainer>
                                </Bloc>
                            );
                        }
                    })}
                </BlocWrapper>
                <BlocWrapper>
                    {data.section.map((bloc: any, i) => {
                        if (i >= 2) {
                            return (
                                <Bloc key={bloc.id}>
                                    <Square />
                                    <BlocTextContainer>
                                        <Subtitle>{bloc.titre}</Subtitle>
                                        <BlocText>{bloc.texte}</BlocText>
                                    </BlocTextContainer>
                                </Bloc>
                            );
                        }
                    })}
                </BlocWrapper>
            </BlocContainer>
        </HistorySection>
    );
}
