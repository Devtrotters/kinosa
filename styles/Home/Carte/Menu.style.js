import styled from 'styled-components';
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
`;

export const DropDown = styled.ul`
    height: 0;

    transform-origin: top;
    transform: scaleY(0);
    transition: all 0.3s linear;

    &.open {
        transform: scaleY(1);
        height: 100%;
    }
`;
export const DropDownItem = styled.li`
    display: grid;
    grid-template-columns: 1fr fit-content(100%);
    grid-gap: 10px;
    align-content: start;
    padding: 0 20px;
    margin-top: 40px;

    &:first-of-type {
        margin-top: 30px;
    }

    &:last-of-type {
        margin-bottom: 20px;
    }
`;

export const DropDownText = styled(Subtitle)`
    color: ${(props) => props.theme.color.orange};
    &:last-of-type {
        color: ${(props) => props.theme.color.green.dark};
    }
`;
