import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const CommandSection = styled.section`
    margin-top: 100px;
    padding: 0 15px;
    overflow: scroll;
    @media screen and (${breakpoint.device.s}) {
        padding: 0 40px;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 0 230px;
    }

    @media screen and (${breakpoint.device.menu}) {
        overflow: hidden;
    }

    @media screen and (${breakpoint.device.lg}) {
        padding: 0 260px;
    }
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
