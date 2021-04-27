import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Button } from 'styles/UI/Buttons.style';
import { Subtitle, Text } from 'styles/UI/Texts.style';

export const ConceptSection = styled.section`
    margin-top: 100px;
    padding: 0 15px;

    @media screen and (${breakpoint.device.s}) {
        padding: 0 40px;
        margin-top: 100px;

        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 80px;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 0 230px;
    }

    @media screen and (${breakpoint.device.lg}) {
        padding: 0 260px;
    }
`;

export const ConceptWrapper = styled.article`
    @media screen and (${breakpoint.device.s}) {
        grid-column: 2 / 2;
    }
`;

export const ConceptSubtitle = styled(Subtitle)`
    margin-top: 40px;
`;

export const ConceptText = styled(Text)`
    margin-top: 10px;
    text-align: justify;

    &:first-of-type {
        margin-top: 20px;
    }
`;

export const ConceptButton = styled(Button)`
    margin-top: 40px;
`;

export const GerantArticle = styled.article`
    margin-top: 60px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;

    > div:first-of-type {
        > div {
            > img {
                transform: scale(1.5);
            }
        }
    }
    @media screen and (${breakpoint.device.s}) {
        grid-row: 1 / 1;
        margin-top: 0;
    }
`;

export const GerantWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr fit-content(10%);
    row-gap: 15px;
`;

export const GerantImgContainer = styled.div`
    border-radius: 10px;

    overflow: hidden;
`;

export const GerantImg = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
    filter: grayscale(100%);

    transition: all 0.3s linear;

    &.selected {
        filter: grayscale(0%);
    }

    &:last-of-type {
        grid-row: 1 / 1;
        grid-column: 2 / 2;
    }
`;

export const GerantText = styled(Text)`
    grid-row: 2 / 2;
    grid-column: 1 / span 2;

    display: none;

    &.selected {
        display: inline;
    }
`;
