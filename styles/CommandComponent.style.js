import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Subtitle } from 'styles/UI/Texts.style';

export const Command = styled.section`
    padding: 0 0;
    display: flex;
    column-gap: 30px;
    overflow: scroll;

    @media screen and (${breakpoint.device.s}) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 30px;
    }

    @media screen and (${breakpoint.device.menu}) {
        overflow: hidden;
    }
`;

export const CommandContainer = styled.div.attrs((props) => {})`
    width: 100%;
    flex-shrink: 0;
    border-radius: 20px;
    margin-top: 20px;
    background-image: url(${(props) => props.url});
    background-position: 30% 30%;
    background-size: cover;
    padding-left: 25px;
    padding-top: 100px;
    padding-bottom: 40px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const CommandH2 = styled(Subtitle)`
    width: 50%;
    color: ${(props) => props.theme.color.white};
    margin-bottom: 20px;
    text-align: center;
`;
