import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Button } from 'styles/UI/Buttons.style';
import { Text, Title } from 'styles/UI/Texts.style';

export const CarteSection = styled.section`
    margin-top: 80px;

    @media screen and (${breakpoint.device.s}) {
        display: flex;
        column-gap: 55px;
    }

    @media screen and (${breakpoint.device.m}) {
        margin-top: 100px;
        column-gap: 85px;
    }
`;

export const MenuContainer = styled.div`
    margin-left: 40px;
    display: none;
    @media screen and (${breakpoint.device.menu}) {
        display: block;
    }

    @media screen and (${breakpoint.device.m}) {
        margin-left: 230px;
    }

    @media screen and (${breakpoint.device.lg}) {
        margin-left: 260px;
    }
`;

export const Menu = styled.aside`
    @media screen and (${breakpoint.device.menu}) {
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        position: sticky;
        top: 20px;
    }
`;

export const MenuButton = styled(Button)`
    border-radius: 10px;
`;

export const CarteContainer = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 60px;

    overflow: hidden;

    @media screen and (${breakpoint.device.m}) {
        row-gap: 100px;
    }
`;

export const CarteWrapper = styled.div`
    @media screen and (${breakpoint.device.s}) {
        &:nth-child(odd) > article {
            &:nth-child(2) {
                > section {
                    grid-template-columns: fit-content(100%) 1fr;
                    column-gap: 85px;

                    > article {
                        grid-column: 1;
                        &:last-of-type {
                            grid-column: 2;
                            grid-row: 1 / span 4;
                        }
                    }
                }
            }
        }

        &:nth-child(even) > article {
            &:nth-child(2) {
                > section {
                    grid-template-columns: 1fr fit-content(100%);
                    column-gap: 85px;

                    > article {
                        grid-column: 2;
                        &:last-of-type {
                            grid-column: 1;
                            grid-row: 1 / span 4;
                            > div > p {
                                right: auto;
                                left: 15px;
                                &.sousCategorie {
                                    right: 15px;
                                    left: auto;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const CarteTitle = styled(Title)`
    margin: 0 15px;

    @media screen and (${breakpoint.device.s}) {
        margin: 0 40px;
    }
    @media screen and (${breakpoint.device.menu}) {
        margin: 0;
    }
`;
export const CarteButtonContainer = styled.div`
    --test: calc(100vw - 100%);
    width: calc(100vw - var(--test));

    margin-top: 20px;

    display: flex;
    column-gap: 20px;
    overflow-x: scroll;
    white-space: nowrap;

    /* Uniquement Firefox */
    scrollbar-width: none;

    /* Tout sauf Firefox */
    &::-webkit-scrollbar {
        display: none;
    }

    &::before {
        content: '';
    }

    @media screen and (${breakpoint.device.menu}) {
        &::before {
            display: none;
        }
    }
`;
export const CarteButton = styled.input`
    padding: 15px;

    display: block;
    border: none;
    background-color: ${(props) => props.theme.color.green.default};
    border-radius: 10px;

    color: ${(props) => props.theme.color.orange};

    background-size: 200% 100%;
    background-image: linear-gradient(
        to right,
        ${(props) => props.theme.color.green.default} 50%,
        ${(props) => props.theme.color.orange} 50%
    );

    transition: 0.5s all;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.color.green.default};
        background-position: -100% 0;
    }

    &.displayed {
        color: ${(props) => props.theme.color.green.default};
        background-color: ${(props) => props.theme.color.orange};
        background-position: -100% 0;
    }
`;

export const Container = styled.article`
    padding: 0 15px;

    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        height: 80%;
        background-color: ${(props) => props.theme.color.beige};
        border-radius: 10px;
        z-index: -1;
    }

    @media screen and (${breakpoint.device.s}) {
        margin: 0 40px;
        padding: 0;

        &::before {
            display: none;
        }
    }

    @media screen and (${breakpoint.device.menu}) {
        margin: 0 40px 0 0;
    }

    @media screen and (${breakpoint.device.m}) {
        margin: 0 230px 0 0;
    }

    @media screen and (${breakpoint.device.lg}) {
        margin: 0 260px 0 0;
    }
`;

export const CategoryContainer = styled.section`
    margin-top: 40px;
    padding-top: 20px;

    display: none;
    grid-template-columns: 1fr;
    row-gap: 25px;

    &.displayed {
        display: grid;
    }

    &.sale {
        grid-template-columns: 1fr 1fr;
    }

    > article {
        &:last-of-type {
            > h3 {
                text-align: justify;
            }
        }
    }

    @media screen and (${breakpoint.device.s}) {
        padding: 0;
    }
    @media screen and (${breakpoint.device.m}) {
        column-gap: 100px !important;
    }
`;

export const SaleWrapper = styled.article`
    display: flex;
    flex-direction: column;

    > p {
        &:nth-child(2) {
            margin-top: 10px;
        }
    }
    &:last-of-type {
        max-width: 100%;

        grid-column: 1 / span 2;
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        > p {
            &:nth-child(2) {
                margin-top: 0;
            }
        }
    }

    @media screen and (${breakpoint.device.s}) {
        max-width: 160px;
    }
`;

export const ProdutTypeTitle = styled(Text)`
    color: ${(props) => props.theme.color.orange};
`;

export const ImageContainer = styled.div`
    margin-top: 10px;
    position: relative;
`;

export const Img = styled.img`
    width: 100%;
    height: 300px;

    display: block;

    border-radius: 10px;
    object-fit: cover;
`;

export const Price = styled.p`
    padding: 15px 25px;

    color: ${(props) => props.theme.color.green.default};
    background-color: ${(props) => props.theme.color.orange};
    border-radius: 10px;

    /* font-weight: bold; */
    font-size: 18px;

    position: absolute;
    bottom: 15px;
    right: 15px;
`;

export const SousCategorie = styled(Price)`
    bottom: auto;
    top: 15px;
    left: 15px;
    right: auto;
`;

export const SucreWrapper = styled.article`
    grid-column: 1 / span 2;

    display: grid;
    grid-template-columns: 1fr 1fr;

    > p {
        &:first-of-type {
            grid-column: 1 / span 2;
            margin-bottom: 10px;
        }
    }

    &:last-of-type {
        max-width: 100%;

        grid-column: 1 / span 2;

        > * {
            grid-column: 1 / span 2;
        }
    }

    @media screen and (${breakpoint.device.s}) {
        grid-template-columns: 1fr;
        max-width: 160px;
        > p {
            grid-column: 1;
        }
    }
`;
