import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Subtitle, Text, Title } from 'styles/UI/Texts.style';

export const HeaderContainer = styled.section`
    margin: 60px 15px 0 15px;

    @media screen and (${breakpoint.device.s}) {
        margin: 60px 40px 0 40px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        justify-content: flex-start;
        gap: 35px;
    }

    @media screen and (${breakpoint.device.m}) {
        margin: 135px 260px 0 260px;
    }
`;

export const HeaderTitleContainer = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    @media screen and (${breakpoint.device.s}) {
        grid-column: 1;
    }
`;

export const HeaderTitle = styled(Title)`
    @media screen and (${breakpoint.device.s}) {
        grid-column: 1;
    }
`;
export const HeaderText = styled(Text)`
    text-align: justify;
    margin-top: 20px;

    @media screen and (${breakpoint.device.s}) {
        grid-column: 1;
    }
`;

export const HeaderSubContainer = styled.article`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    @media screen and (${breakpoint.device.s}) {
        grid-column: 1;
    }
`;

export const HeaderSubTitle = styled(Subtitle)`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.color.green.default};

    &.open {
        color: ${(props) => props.theme.color.orange};
    }

    @media screen and (${breakpoint.device.s}) {
        grid-column: 1;
    }
`;

export const HeaderSubText = styled(Text)`
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    text-align: justify;

    transition: all 0.3s ease-in-out;

    &.open {
        margin-top: 10px;
        overflow: auto;
        max-height: 100vh;
        opacity: 1;
    }

    @media screen and (${breakpoint.device.s}) {
        grid-column: 1;
    }
`;

export const HeaderButton = styled.svg`
    fill: ${(props) => props.theme.color.green.default};
    margin-left: 30px;
    transition: all 0.3s linear;
    cursor: pointer;

    &.open {
        transform: rotate(-180deg);

        > circle {
            fill: ${(props) => props.theme.color.orange};
        }
    }

    @media screen and (${breakpoint.device.s}) {
        grid-column: 1;
    }
`;

export const HeaderImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    row-gap: 20px;

    @media screen and (${breakpoint.device.s}) {
        margin: 0;
        row-gap: 30px;
        grid-row: 1;
        grid-column: 2;
    }
`;

export const HeaderImage = styled.img`
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 20px;
`;
/*
@media screen and (${breakpoint.device.s}) {
        margin-top: 0;
    }
@media screen and (${breakpoint.device.m}) {
        padding: 60px 65px 0 65px;
        margin: 0 165px;
    }

@media screen and (${breakpoint.device.lg}) {
        padding: 60px 95px 0 95px;
}*/
