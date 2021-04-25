import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Text, Title } from 'styles/UI/Texts.style';
export const HeaderContainer = styled.section.attrs((props) => {})`
    height: 575px;

    margin-top: 50px;
    padding: 0 15px 40px 15px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    background-image: url(${(props) => props.urlMobile});
    background-size: cover;
    background-position: center;
    border-radius: 30px;

    &::before {
        content: ' ';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 30px;
    }

    @media screen and (${breakpoint.device.s}) {
        background-image: url(${(props) => props.url});
        padding: 0 400px 60px 75px;
        margin: 50px 40px 0 40px;
    }

    @media screen and (${breakpoint.device.m}) {
        margin: 50px 165px 0 165px;
    }

    @media screen and (${breakpoint.device.lg}) {
        margin: 50px 220px 0 220px;
    }
`;

export const HeaderTitle = styled(Title)`
    color: ${(props) => props.theme.color.white};
    z-index: 1;
`;

export const HeaderText = styled(Text)`
    margin-top: 10px;
    color: ${(props) => props.theme.color.white};

    &:first-of-type {
        margin-top: 20px;
    }
    text-align: justify;

    z-index: 1;
`;
