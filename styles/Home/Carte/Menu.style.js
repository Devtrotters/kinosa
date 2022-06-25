import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Subtitle } from 'styles/UI/Texts.style';

export const MenuContainer = styled.section`
    margin-top: 80px;
`;

export const MenuWrapper = styled.article`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

export const MenuTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    position: relative;

    > div:first-of-type {
        display: flex;
        justify-content: space-between;
    }
    &::after {
        content: ' ';
        position: absolute;
        bottom: 0;
        left: 5%;
        right: 5%;
        height: 1px;
        background: ${(props) => props.theme.color.green.default};
        border-radius: 360px;
        margin: auto;
    }
`;

export const Svg = styled.svg`
    width: 30px;
    height: 30px;
    padding: 8px;
    background: ${(props) => props.theme.color.orange};
    border-radius: 360px;
    cursor: pointer;

    &.open {
        rect:last-of-type {
            visibility: hidden;
        }
    }
`;
export const MenuLink = styled.a`
    color: ${(props) => props.theme.color.green.dark};
    font-size: 12px;
    position: relative;
    text-decoration: underline;
    cursor: pointer;
`;

export const DropDown = styled.ul`
    height: 0;

    transform-origin: top;
    transform: scaleY(0);
    transition: all 0.3s linear;

    display: flex;
    column-gap: 30px;

    margin-top: 20px;
    overflow-x: scroll;
    overflow-y: hidden;

    &.open {
        transform: scaleY(1);
        height: 100%;
    }
`;
export const DropDownItem = styled.li`
    flex-shrink: 0;
    height: 300px;
    width: 100%;
    max-width: 255px;
    border-radius: 20px;
    position: relative;

    &::before {
        content: ' ';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 30px;
        z-index: 0;
    }

    @media screen and (${breakpoint.device.s}) {
        height: 400px;
    }
`;

export const DropDownTextContainer = styled.div`
    position: absolute;
    inset: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;

    @media screen and (${breakpoint.device.m}) {
        inset: 60px;
    }
`;

export const DropDownText = styled(Subtitle)`
    color: ${(props) => props.theme.color.white};
    font-size: 16px;
    text-align: center;

    &:first-of-type {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    @media screen and (${breakpoint.device.menu}) {
        font-size: 20px;

        &:first-of-type {
            font-size: 30px;
        }
    }
`;
