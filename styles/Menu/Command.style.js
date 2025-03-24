import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { BigText } from 'styles/UI/Texts.style';

export const CommandSection = styled.section`
    margin-top: 80px;
    padding: 0 15px;

    @media screen and (${breakpoint.device.s}) {
        padding: 0 40px 0 0;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 0 230px 0 0;
    }

    @media screen and (${breakpoint.device.lg}) {
        padding: 0 260px 0 0;
    }
`;

export const CommandText = styled(BigText)`
    color: ${(props) => props.theme.color.green.default};
`;

export const SubtitleGrid = styled.article`
    display: none;

    @media screen and (${breakpoint.device.menu}) {
        margin-top: 20px;

        display: grid;
        grid-template-columns: 1fr;
        row-gap: 20px;
    }
`;
