import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Button } from 'styles/UI/Buttons.style';
import { Subtitle, Title } from 'styles/UI/Texts.style';

export const HeaderContainer = styled.section`
    margin-top: 60px;

    @media screen and (${breakpoint.device.s}) {
        margin-top: 0;
        padding: 60px 40px 0 40px;

        position: relative;
        &::before {
            content: ' ';
            background-color: ${(props) => props.theme.color.beige};
            position: absolute;

            height: 70%;

            top: 0;
            left: 0;
            right: 0;
            border-radius: 0px 0px 30px 30px;
            z-index: -1;
        }
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 60px 165px 0 165px;
    }

    @media screen and (${breakpoint.device.lg}) {
        padding: 60px 220px 0 220px;
    }
`;

export const HeaderTitle = styled(Title)`
    margin: 0 15px;
    @media screen and (${breakpoint.device.s}) {
        margin: 0;
    }
`;

export const HookContainer = styled.article`
    margin-top: 60px;
    @media screen and (${breakpoint.device.s}) {
        display: flex;
    }
`;

export const Hook = styled.div.attrs((props) => {})`
    height: 500px;
    width: 100%;

    padding: 0 20px 60px 20px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background-image: url(${(props) => props.url});
    background-position: center;
    background-size: cover;

    border-radius: 0px 0px 10px 10px;

    transition: background-color 0.3s linear;

    &::before {
        content: ' ';
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 0px 0px 10px 10px;
    }

    &:first-of-type {
        border-radius: 10px 10px 0px 0px;
        &::before {
            border-radius: 10px 10px 0px 0px;
        }
    }

    &:hover {
        &::before {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    @media screen and (${breakpoint.device.s}) {
        border-radius: 10px 10px 10px 0px;
        &::before {
            border-radius: 10px 10px 10px 0px;
        }
        &:first-of-type {
            margin-top: 0;
            border-radius: 10px 10px 0px 10px;

            &::before {
                border-radius: 10px 10px 0px 10px;
            }
        }
    }
`;

export const HookTitle = styled(Subtitle)`
    font-size: 40px;
    color: ${(props) => props.theme.color.white};
    z-index: 1;
`;

export const HookText = styled(HookTitle).attrs({ as: 'p' })`
    margin-top: 10px;
    font-size: 14px;
    @media screen and (${breakpoint.device.s}) {
        width: 60%;
        min-height: 64px;
        text-align: justify;
    }
`;

export const HookButton = styled(Button)`
    margin-top: 20px;
    z-index: 1;
`;
