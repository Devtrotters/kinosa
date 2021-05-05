import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { BigText, MediumText, Subtitle, Text, Title } from 'styles/UI/Texts.style';

export const PrestationsWrapper = styled.section`
    display: flex;
    margin: 100px 15px 0 15px;
    row-gap: 60px;

    @media screen and (${breakpoint.device.s}) {
        margin: 100px 45px 0 45px;
    }

    @media screen and (${breakpoint.device.menu}) {
        display: grid;
        column-gap: 30px;
        grid-template-columns: fit-content(50%) 1fr;
    }
    @media screen and (${breakpoint.device.m}) {
        margin: 100px 230px 0 165px;
    }
`;

export const PrestationsNav = styled.aside`
    @media screen and (${breakpoint.device.menu}) {
        height: 100%;
    }
`;

export const PrestationsNavWrapper = styled.div`
    display: none;
    @media screen and (${breakpoint.device.menu}) {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        position: sticky;
        top: 20px;
    }
`;

export const PrestationsNavLinkWrapper = styled.div`
    @media screen and (${breakpoint.device.menu}) {
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
`;

export const PrestationsNavLink = styled.a`
    @media screen and (${breakpoint.device.menu}) {
        text-decoration: none;
        cursor: pointer;
        width: fit-content;
    }
`;

export const PrestationsNavText = styled(Text)`
    color: ${(props) => props.theme.color.green.default};

    &.selected {
        color: ${(props) => props.theme.color.orange};
    }
`;

export const PrestationsNavSquare = styled.div`
    @media screen and (${breakpoint.device.menu}) {
        display: none;
        width: 10px;
        height: 10px;
        border-radius: 2px;
        background-color: ${(props) => props.theme.color.orange};

        &.selected {
            display: flex;
        }
    }
`;

export const PrestationsContainer = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    width: auto;
`;

export const PrestationsBlocContainer = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media screen and (${breakpoint.device.s}) {
        row-gap: 0;
    }
`;

export const PrestationsTitle = styled(Subtitle)`
    @media screen and (${breakpoint.device.s}) {
        order: 2;
        margin-top: 40px;
    }
`;

export const PrestationsBlocTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    width: 100%;

    @media screen and (${breakpoint.device.s}) {
        flex-direction: row;
        column-gap: 30px;
        order: 3;
        margin-top: 20px;
    }

    @media screen and (${breakpoint.device.m}) {
        column-gap: 65px;
    }
`;

export const PrestationsBlocTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
`;

export const PrestationsBlocTitle = styled(Text)`
    color: ${(props) => props.theme.color.orange};
`;
export const PrestationsBlocText = styled(Text)`
    text-align: justify;
    width: 100%;
`;

export const PrestationsBlocImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    order: 1;
    width: 100%;

    @media screen and (${breakpoint.device.s}) {
        flex-direction: row;
        column-gap: 30px;
        order: 1;
    }

    @media screen and (${breakpoint.device.m}) {
        column-gap: 65px;
    }
`;

export const PrestationsBlocImage = styled.img`
    border-radius: 10px;
    max-height: 200px;
    object-fit: cover;
    display: block;

    @media screen and (${breakpoint.device.s}) {
        object-fit: cover;
        width: 100%;
        max-height: 230px;
    }

    @media screen and (${breakpoint.device.m}) {
        object-fit: cover;
        width: 100%;
    }
`;
