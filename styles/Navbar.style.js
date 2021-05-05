import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Svg } from 'styles/SocialLogo.style';
import { Button } from 'styles/UI/Buttons.style';
import { Text, Title } from 'styles/UI/Texts.style';

export const MobileMenu = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 15px 0 15px;
    position: relative;
    overflow: hidden;

    @media screen and (${breakpoint.device.s}) {
        &.home {
            background: ${(props) => props.theme.color.beige};
        }

        padding: 25px 40px 0 40px;
    }

    @media screen and (${breakpoint.device.menu}) {
        display: none;
    }
`;

export const HeaderMobileMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px 30px 0 30px;
    width: 100%;

    > h1 {
        font-size: 20px;
        grid-column: 2;
        font-weight: normal;
        text-align: center;
        color: ${(props) => props.theme.color.white};
    }
`;

export const SocialLogoContainer = styled.article`
    margin-top: 10px;
    display: grid;
    grid-template-columns: fit-content(100%) fit-content(100%) fit-content(100%);
    justify-content: center;
    column-gap: 40px;
`;

export const DisplayMobileButton = styled.svg`
    cursor: pointer;
    display: bloc;
    justify-self: end;
`;

export const MenuContainer = styled.section`
    display: none;
    justify-content: space-between;
    align-items: center;

    &.home {
        background: ${(props) => props.theme.color.beige};
    }

    @media screen and (${breakpoint.device.menu}) {
        display: flex;
        padding: 25px 40px 0 40px;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 25px 65px 0 65px;
        margin: 0 165px;
    }

    @media screen and (${breakpoint.device.lg}) {
        padding: 25px 95px 0 95px;
        margin: 0 165px;
    }
`;

export const NavContainer = styled.nav`
    &.none {
        display: none;
    }
    transform: translateX(100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    position: fixed;

    z-index: 99;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: ${(props) => props.theme.color.orange};

    transition: transform 1s linear, left 1s linear;

    &.open {
        transform: translateX(0);
    }

    @media screen and (${breakpoint.device.s}) {
        left: 50%;
        &.open {
            transform: translateX(0);
        }
    }

    @media screen and (${breakpoint.device.menu}) {
        flex-direction: row;
        align-items: center;
        column-gap: 30px;
        width: inherit;
        height: 100%;
        position: static;
        transform: translateX(0);
        background: inherit;
    }
`;

export const NavText = styled.a`
    color: ${(props) => props.theme.color.green.default};
    font-size: 30px;
    cursor: pointer;

    &.active {
        text-decoration: underline;
    }

    @media screen and (${breakpoint.device.s}) {
        font-size: 30px;
    }

    @media screen and (${breakpoint.device.menu}) {
        position: relative;
        padding: 0 10px 0 10px;

        font-size: 15px;
        color: ${(props) => props.theme.color.green.default};
        transition: all 0.3s linear;

        &:hover {
            color: ${(props) => props.theme.color.orange};
        }

        &.active {
            color: ${(props) => props.theme.color.orange};
            text-decoration: none;

            &::after {
                content: '';
                position: absolute;
                bottom: -15px;
                left: 0;
                right: 0;

                margin: auto;
                height: 3px;
                width: 4rem;

                background: ${(props) => props.theme.color.orange};
                border-radius: 2px;
            }
        }
    }
`;

export const NavButton = styled(Button)`
    padding: 15px 20px;

    border-radius: 10px;
    font-size: 20px;

    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color.green.default};

    &:hover {
        color: ${(props) => props.theme.color.white};
    }

    @media screen and (${breakpoint.device.s}) {
        font-size: 20px;
    }

    @media screen and (${breakpoint.device.menu}) {
        margin-left: 25px;
        padding: 10px 20px;

        font-size: 15px;

        border-radius: 3px;
        background-size: 200% 100%;
        background-image: linear-gradient(
            to right,
            ${(props) => props.theme.color.orange} 50%,
            ${(props) => props.theme.color.green.default} 50%
        );

        transition: 0.5s all;

        &:hover {
            color: ${(props) => props.theme.color.white};
            background-position: -100% 0;
        }
    }
`;

/*
@media screen and (${breakpoint.device.s}) {
    
}

@media screen and (${breakpoint.device.m}) {
    

@media screen and (${breakpoint.device.lg}) {
    
}
*/
