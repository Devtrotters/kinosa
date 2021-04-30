import styled from 'styled-components';

export const Svg = styled.svg`
    > path {
        fill: ${(props) => props.theme.color.orange};
    }

    &:hover {
        cursor: pointer;
    }

    &:not(.footer):hover {
        > path {
            transition: all 0.3s linear;
            fill: ${(props) => props.theme.color.green.default};
        }
    }
    &.menu {
        > path {
            fill: #fff;
        }
    }
`;
