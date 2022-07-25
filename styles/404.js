import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const NotFoundContainer = styled.section`
    padding-top: 30px;

    margin-top: 60px;

    @media screen and (${breakpoint.device.s}) {
        padding: 60px 40px 0 40px;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 60px 260px 0 260px;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 30px;
`;

export const NotFoundTitle = styled.h1`
    font-size: 40px;
    color: #007a0c;
    font-weight: normal;

    margin-top: 30px;

    display: none;

    @media screen and (${breakpoint.device.m}) {
        display: inline;
    }
`;

export const NotFoundText = styled.h2`
    font-size: 20px;
    color: #007a0c;
    font-weight: normal;

    &:first-of-type {
        display: none;
    }

    > a {
        color: #f9bb42;
    }

    @media screen and (${breakpoint.device.m}) {
        &:first-of-type {
            display: inline;
        }
    }
`;
