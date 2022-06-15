import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Subtitle, Text } from 'styles/UI/Texts.style';

export const CitationContainer = styled.article`
    margin: 60px 30px 0 30px;
    padding: 30px 0 0 20px;
    position: relative;

    @media screen and (${breakpoint.device.s}) {
        margin: 60px 45px 0 45px;
    }

    @media screen and (${breakpoint.device.menu}) {
        margin: 60px 165px 0 165px;
    }

    @media screen and (${breakpoint.device.m}) {
        margin: 60px 450px 0 450px;
    }

    @media screen and (${breakpoint.device.lg}) {
        margin: 60px 510px 0 510px;
    }
`;

export const Bubules = styled.aside`
    position: absolute;
    top: 0;
    left: 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;

    z-index: -1;

    &:last-of-type {
        top: auto;
        left: auto;
        bottom: 0;
        right: 0;
    }
`;

export const CitationText = styled(Subtitle)`
    font-weight: bold;
`;

export const CitationAuthor = styled(Text)`
    margin-top: 10px;

    color: ${(props) => props.theme.color.orange};
`;
