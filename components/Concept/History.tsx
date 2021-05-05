import formatText from 'lib/formatText';
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
            <Title>{formatText(data.titre)}</Title>
            <BlocContainer>
                <BlocWrapper>
                    {data.section.map((bloc: any, i: number) => {
                        if (i < 2) {
                            return (
                                <Bloc key={bloc.id}>
                                    <Square />
                                    <BlocTextContainer>
                                        <Subtitle>{formatText(bloc.titre)}</Subtitle>
                                        <BlocText>{formatText(bloc.texte)}</BlocText>
                                    </BlocTextContainer>
                                </Bloc>
                            );
                        }
                    })}
                </BlocWrapper>
                <BlocWrapper>
                    {data.section.map((bloc: any, i: number) => {
                        if (i >= 2) {
                            return (
                                <Bloc key={bloc.id}>
                                    <Square />
                                    <BlocTextContainer>
                                        <Subtitle>{formatText(bloc.titre)}</Subtitle>
                                        <BlocText>{formatText(bloc.texte)}</BlocText>
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
