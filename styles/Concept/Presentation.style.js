import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Subtitle, Text } from 'styles/UI/Texts.style';

export const PresentationContainer = styled.section`
    margin-top: 60px;
    padding: 60px 15px;

    display: flex;
    flex-direction: column;
    row-gap: 40px;

    position: relative;

    background-color: ${(props) => props.theme.color.beige};

    @media screen and (${breakpoint.device.s}) {
        padding: 60px 45px;
    }
    @media screen and (${breakpoint.device.m}) {
        padding: 60px 95px;
        margin: 0 165px;
    }
    @media screen and (${breakpoint.device.lg}) {
        margin: 0 220px;
    }
`;

export const GerantContainer = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 40px;

    @media screen and (${breakpoint.device.s}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 30px;

        &:nth-child(odd) {
            > .image {
                grid-column: 1;
            }
            > div {
                grid-column: 2;
            }
        }

        &:nth-child(even) {
            > .image {
                grid-column: 2;
            }
            > div {
                grid-column: 1;
                grid-row: 1;
            }
        }
    }
`;
export const GerantImgWrapper = styled.div`
    height: 100%;
    width: 100%;
`;
export const GerantImg = styled.img`
    max-height: 340px;
    width: 100%;

    display: block;
    border-radius: 10px;
    object-fit: cover;
`;

export const GerantPresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`;

export const GerantNameContainer = styled.aside`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`;

export const GerantName = styled(Subtitle)`
    font-weight: bold;
`;

export const SocialContainer = styled.aside`
    display: flex;
    column-gap: 10px;
`;

export const GerantText = styled(Text)`
    text-align: justify;
`;
