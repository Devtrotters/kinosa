import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { BigText, MediumText, Text, Title } from 'styles/UI/Texts.style';

export const HeaderContainer = styled.section`
    margin: 60px 15px 0 15px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    @media screen and (${breakpoint.device.s}) {
        margin: 60px 45px 0 45px;
    }

    @media screen and (${breakpoint.device.menu}) {
        display: grid;
        grid-template-columns: fit-content(50%) 1fr;
        margin: 60px 45px 0 45px;
        column-gap: 30px;
    }

    @media screen and (${breakpoint.device.m}) {
        margin: 60px 230px 0 230px;
    }
`;
export const HeaderTextContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
`;
export const HeaderTitle = styled(Title)``;
export const HeaderText = styled(Text)`
    display: flex;
    flex-direction: column;

    text-align: justify;
`;
export const HeaderImage = styled.img`
    border-radius: 10px;
    width: 100%;
    max-height: 300px;
    object-fit: cover;

    @media screen and (${breakpoint.device.menu}) {
        height: 100%;
        max-width: 100%;
        object-fit: cover;
    }
`;
