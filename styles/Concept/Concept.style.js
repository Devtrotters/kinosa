import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Text, Title } from 'styles/UI/Texts.style';

export const ConceptSection = styled.section`
    padding: 60px 15px;

    display: flex;
    flex-direction: column;

    @media screen and (${breakpoint.device.s}) {
        display: grid;
        grid-template-columns: fit-content(100%) 1fr;
        column-gap: 35px;
        padding: 60px 45px;
    }
    @media screen and (${breakpoint.device.m}) {
        padding: 60px 230px;
    }
    @media screen and (${breakpoint.device.lg}) {
        padding: 60px 260px;
    }
`;

export const ConceptTitle = styled(Title)`
    margin-bottom: 30px;

    @media screen and (${breakpoint.device.menu}) {
        margin-bottom: 60px;
        grid-column: 1 / span 2;
    }
`;

export const Menu = styled.aside`
    display: none;

    @media screen and (${breakpoint.device.s}) {
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        position: sticky;
        top: 120px;
    }
`;

export const MenuWrapper = styled.div`
    @media screen and (${breakpoint.device.s}) {
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
`;
export const MenuLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`;
export const MenuText = styled(Text).attrs({
    as: 'h2'
})`
    &.displayed {
        color: ${(props) => props.theme.color.orange};
    }

    &:hover {
        color: ${(props) => props.theme.color.orange};
    }
`;
export const Square = styled.div`
    @media screen and (${breakpoint.device.s}) {
        visibility: hidden;
        width: 10px;
        height: 10px;
        background-color: ${(props) => props.theme.color.orange};

        &.displayed {
            visibility: visible;
        }
    }
`;

export const ConceptContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    row-gap: 60px;

    @media screen and (${breakpoint.device.s}) {
        row-gap: 100px;
    }
`;

export const Bloc = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media screen and (${breakpoint.device.menu}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 30px;

        &:nth-of-type(even) {
            > img {
                grid-row: 1 / span 3;
            }
        }

        &:nth-of-type(odd) {
            > img {
                grid-column: 2;
                grid-row: 1 / span 3;
            }

            > div {
                grid-column: 1;
            }
        }

        &:first-of-type {
            > h1 {
                grid-column: 1 / span 2;
                grid-row: 1;
            }

            > img {
                grid-column: 1 / span 2;
                grid-row: 3;
            }

            > div {
                &:last-of-type {
                    grid-column: 2;
                }

                grid-row: 2;
            }
        }
    }
`;

export const BlocTitle = styled.h3`
    font-size: 40px;
    font-weight: normal;
    color: ${(props) => props.theme.color.green.default};
`;

export const BlocText = styled(Text).attrs({
    as: 'div'
})`
    text-align: justify;
    > p {
        > a {
            color: ${(props) => props.theme.color.orange};
        }
    }
`;
export const BlocImg = styled.img`
    max-height: 380px;
    width: 100%;
    border-radius: 10px;

    object-fit: cover;

    @media screen and (${breakpoint.device.s}) {
        height: 100%;
    }
`;
