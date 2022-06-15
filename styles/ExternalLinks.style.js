import styled, { keyframes } from 'styled-components';

import { Text } from './UI/Texts.style';

export const Container = styled.section`
    margin-top: 100px;
    text-align: center;

    overflow: hidden;
`;

export const Infos = styled(Text)`
    margin-top: 5px;
`;

const slider = (n) => keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc((-150px * ${n}) + (-45px * ${n})));
  }
`;

export const Grid = styled.div.attrs((props) => {})`
    width: calc(150px * ${(props) => Number(props.number)});
    display: flex;
    column-gap: 45px;
    margin-top: 40px;
    align-items: flex-end;
    float: left;
    -webkit-animation: ${(props) => slider(props.number)} infinite
        calc(2s * ${(props) => Number(props.number)}) linear;
    animation: ${(props) => slider(props.number)} infinite
        calc(2s * ${(props) => Number(props.number)}) linear;

    &:hover {
        animation-play-state: paused;
    }

    > article {
        min-width: 150px;
    }
`;

export const Img = styled.img`
    max-width: 100px;
    max-height: 100px;
    /* object-fit: cover; */
    margin: auto;
`;

export const Line = styled.hr`
    width: 180px;
    height: 0;
    border: 1px solid ${(props) => props.theme.color.green.default};
    background-color: ${(props) => props.theme.color.green.default};
    margin-top: 60px;
`;

export const ExternalLink = styled.a`
    text-decoration: none;
`;
