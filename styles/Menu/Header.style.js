import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Text, Title } from 'styles/UI/Texts.style';

export const HeaderSection = styled.section`
    margin-top: 60px;
    padding: 0 15px;

    @media screen and (${breakpoint.device.s}) {
        padding: 0 40px;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 0 230px;
    }

    @media screen and (${breakpoint.device.lg}) {
        padding: 0 260px;
    }
`;

export const HeaderContainer = styled.article`
    display: grid;
    row-gap: 40px;

    @media screen and (${breakpoint.device.s}) {
        grid-template-columns: 1fr 1fr;
        column-gap: 50px;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    justify-content: center;
`;

export const HeaderTitle = styled(Title)`
    width: 80%;
`;
export const HeaderText = styled(Text)`
    text-align: justify;

    &:first-of-type {
        margin-top: 5px;
    }
`;

export const HeaderImage = styled.img`
    width: 100%;
    max-height: 300px;

    object-fit: cover;
    border-radius: 10px;

    @media screen and (${breakpoint.device.s}) {
        max-height: 480px;
    }
`;
