import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Svg } from 'styles/SocialLogo.style';
import { Button } from 'styles/UI/Buttons.style';
import { Text, Title } from 'styles/UI/Texts.style';

export const MobileMenu = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px 10px 15px;
    overflow: hidden;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;

    background: ${(props) => props.theme.color.white};

    @media screen and (${breakpoint.device.s}) {
        &.home {
            background: ${(props) => props.theme.color.beige};
        }

        padding: 25px 40px 15px 40px;
    }
    @media screen and (${breakpoint.device.menu}) {
        display: none;
    }
`;

export const HeaderMobileMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr fit-content(100%);
    padding: 20px 30px 0 30px;
    width: 100%;

    > h1 {
        font-size: 20px;
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

export const MobileButtonContainer = styled.div`
    display: flex;
    column-gap: 30px;
    align-items: center;
`;

export const PhoneMobileButton = styled.a``;

export const DisplayMobileButton = styled.svg`
    cursor: pointer;
    display: block;
    justify-self: end;
`;

export const MenuContainer = styled.section`
    display: none;
    justify-content: space-between;
    align-items: center;

    background: ${(props) => props.theme.color.beige};

    @media screen and (${breakpoint.device.menu}) {
        display: flex;
        padding: 35px 40px 10px 40px;

        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 99;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 35px 165px 0 165px;
    }

    @media screen and (${breakpoint.device.lg}) {
        padding: 35px 195px 0 195px;
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

    transition: transform 0.3s linear, left 0.3s linear;

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
    text-decoration: none;

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
        transition: all 0.2s linear;

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

export const NavButtonContainer = styled.div`
    position: relative;
`;

export const NavButtonPhone = styled.a`
    position: absolute;
    bottom: calc(100% + 10px);
    right: 0;

    font-size: 12px;
    color: #014e08;

    display: flex;
    align-items: center;
    column-gap: 5px;

    text-decoration: none;

    transition: all 0.2s linear;

    &:hover {
        color: #f9bb42;
    }
`;

export const NavButton = styled(Button).attrs({ as: 'a' })`
    padding: 15px 20px;

    border-radius: 10px;
    font-size: 20px;

    color: ${(props) => props.theme.color.orange};
    background: ${(props) => props.theme.color.green.default};

    &:hover {
        color: ${(props) => props.theme.color.orange};
    }

    @media screen and (${breakpoint.device.s}) {
        font-size: 20px;
    }

    @media screen and (${breakpoint.device.menu}) {
        color: ${(props) => props.theme.color.green.default};

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
            color: ${(props) => props.theme.color.orange};
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
