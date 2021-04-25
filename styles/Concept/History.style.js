import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Text } from 'styles/UI/Texts.style';

export const HistorySection = styled.section`
    margin-top: 100px;
    padding: 0 15px;

    @media screen and (${breakpoint.device.s}) {
        padding: 0 45px;
    }
    @media screen and (${breakpoint.device.m}) {
        padding: 0 165px;
    }
    @media screen and (${breakpoint.device.lg}) {
        padding: 0 220px;
    }
`;

export const BlocContainer = styled.div`
    margin-top: 60px;

    display: flex;
    flex-direction: column;
    row-gap: 30px;

    @media screen and (${breakpoint.device.s}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 35px;
    }
`;

export const BlocWrapper = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    @media screen and (${breakpoint.device.s}) {
        &:last-of-type {
            margin-top: 90px;
        }
    }
`;

export const Bloc = styled.article`
    display: grid;
    grid-template-columns: fit-content(100%) 1fr;
    column-gap: 15px;
`;

export const Square = styled.aside`
    width: 55px;
    height: 55px;

    background-color: ${(props) => props.theme.color.orange};
`;

export const BlocTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`;

export const BlocText = styled(Text)`
    text-align: justify;
`;
