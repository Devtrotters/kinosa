import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { BigText, MediumText, Subtitle, Text, Title } from 'styles/UI/Texts.style';

export const ConfianceContainer = styled.section`
    margin-top: 100px;
    padding: 0 15px;

    @media screen and (${breakpoint.device.s}) {
        padding: 0 40px;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 0 230px;
    }
`;
