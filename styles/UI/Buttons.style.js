import styled from 'styled-components';

import breakpoints from '../breakpoints';

export const Button = styled.a`
    display: flex;
    column-gap: 10px;
    text-decoration: none;
    cursor: pointer;
    padding: 20px;
    width: fit-content;

    color: ${(props) => props.theme.color.green.default};

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
`;
