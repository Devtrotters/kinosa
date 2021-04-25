import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

import { Text } from './UI/Texts.style';

export const Container = styled.section`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    @media screen and (${breakpoint.device.s}) {
        grid-column: 1 / span 2;
    }
`;

export const Infos = styled(Text)`
    margin-top: 5px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 45px;
    margin-top: 40px;
    align-items: flex-end;

    @media screen and (${breakpoint.device.s}) {
        grid-template-columns: repeat(4, 1fr);
        grid-column: 1 / span 2;
    }
`;

export const Img = styled.img`
    max-width: 100px;
    max-height: 100px;
    object-fit: cover;
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
