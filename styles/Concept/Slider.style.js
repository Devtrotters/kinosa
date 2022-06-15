import styled, { keyframes } from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { MediumText } from 'styles/UI/Texts.style';

export const SliderSection = styled.section`
    display: none;

    @media screen and (${breakpoint.device.s}) {
        padding: 100px 45px 0 45px;
        display: block;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 100px 230px 0 230px;
    }
    @media screen and (${breakpoint.device.lg}) {
        padding: 100px 260px 0 260px;
    }
`;
export const SliderContainer = styled.article`
    display: grid;
    grid-template-columns: 1fr fit-content(100%);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 50px;
    row-gap: 20px;

    align-items: end;
`;

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    border-radius: 20px;

    animation: ${fade} 0.3s linear;

    &:first-of-type {
        grid-column: 1;
        grid-row: 1 / span 2;
        height: 520px;
    }

    &:nth-child(2) {
        grid-row: 1;
    }

    &:last-of-type {
        grid-row: 2;
    }

    &:nth-child(2),
    &:last-of-type {
        max-height: 160px;
        max-width: 160px;
    }

    &:hover {
        cursor: pointer;
    }
`;

export const SliderButtonContainer = styled.article`
    margin-top: 20px;

    display: flex;
    column-gap: 30px;
`;

export const SliderButtonWrapper = styled.div`
    display: flex;
    column-gap: 15px;
`;

export const Svg = styled.svg`
    &:hover {
        cursor: pointer;

        > circle {
            transition: all 0.3s linear;
            fill: ${(props) => props.theme.color.green.default};
        }
    }
`;

export const ProgressText = styled(MediumText)`
    color: ${(props) => props.theme.color.orange};
`;
