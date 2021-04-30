import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Subtitle, Text, Title } from 'styles/UI/Texts.style';

export const AnimationsContainer = styled.section`
    margin: 60px 15px 0 15px;

    @media screen and (${breakpoint.device.s}) {
        margin: 100px 40px 0 40px;
    }
    @media screen and (${breakpoint.device.m}) {
        margin: 95px 230px 0 230px;
    }
`;

export const AnimationsTitleContainer = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`;

export const AnimationsContent = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (${breakpoint.device.s}) {
        flex-direction: row;
        column-gap: 30px;
    }
`;

export const AnimationsTitle = styled(Title)``;
export const AnimationsText = styled(Text)`
    text-align: justify;
    margin-top: 20px;
`;

export const AnimationsSubContainer = styled.article`
    margin-top: 30px;
    row-gap: 20px;
    display: flex;
    flex-direction: column;
`;

export const AnimationsSubTitle = styled(Subtitle)`
    color: ${(props) => props.theme.color.orange};
`;

export const AnimationsSubText = styled(Text)`
    text-align: justify;
`;

export const AnimationsImage = styled.img`
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 20px;
`;
/*
@media screen and (${breakpoint.device.s}) {
        margin-top: 0;
    }
@media screen and (${breakpoint.device.m}) {
        padding: 60px 65px 0 65px;
        margin: 0 165px;
    }

@media screen and (${breakpoint.device.lg}) {
        padding: 60px 95px 0 95px;
}*/
