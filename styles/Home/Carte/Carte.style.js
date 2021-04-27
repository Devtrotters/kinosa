import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Button } from 'styles/UI/Buttons.style';
import { Text } from 'styles/UI/Texts.style';

export const CarteSection = styled.section`
    padding: 60px 15px 60px 15px;
    margin-top: 100px;

    position: relative;
    background-color: ${(props) => props.theme.color.beige};

    @media screen and (${breakpoint.device.s}) {
        padding: 100px 40px 100px 40px;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 100px 65px 100px 65px;
        margin: 100px 165px 0 165px;
    }

    @media screen and (${breakpoint.device.lg}) {
        padding: 100px 95px 100px 95px;
    }
`;

export const CarteWrapper = styled.article`
    @media screen and (${breakpoint.device.s}) {
        display: flex;
        justify-content: space-between;
        column-gap: 65px;
    }
`;
export const CarteTextContainer = styled.div`
    @media screen and (${breakpoint.device.s}) {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;
export const CarteSubTitle = styled(Text)`
    margin-top: 20px;
    z-index: 1;
`;

export const CarteButton = styled(Button)`
    margin-top: 40px;
    z-index: 1;
`;

export const BlocPlatContainer = styled.div`
    @media screen and (${breakpoint.device.s}) {
        width: 55%;
        display: flex;
        column-gap: 35px;
    }
`;
export const BlocPlat = styled.article`
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    row-gap: 20px;

    z-index: 1;

    &:first-of-type {
        margin-top: 40px;
    }

    @media screen and (${breakpoint.device.s}) {
        margin-top: 40px;

        &:first-of-type {
            margin-top: 0;
            margin-bottom: 40px;
        }
    }
`;

export const BlocPlatImg = styled.img`
    height: 280px;

    border-radius: 10px;

    object-fit: cover;
    z-index: 1;

    @media screen and (${breakpoint.device.s}) {
        width: 100%;
        height: 100%;
    }
`;
