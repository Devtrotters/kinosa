import styled from 'styled-components';

export const Svg = styled.svg`
    fill: ${(props) => props.theme.color.orange};

    transition: all 0.3s linear;

    &:hover {
        cursor: pointer;
    }


    &:not(.footer):hover {
        > path {
            fill: ${(props) => props.theme.color.green.default};
        }
    }
    &.menu {
        > path {
            fill: #fff;
        }
    }
`;
