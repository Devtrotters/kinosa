import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { BigText, MediumText, Text, Title } from 'styles/UI/Texts.style';

export const CreationsContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 15px 0 15px;
    row-gap: 30px;

    @media screen and (${breakpoint.device.s}) {
        margin: 0 40px 0 40px;
    }
    @media screen and (${breakpoint.device.m}) {
        margin: 0 230px 0 0;
    }

    @media screen and (${breakpoint.device.lg}) {
        margin: 0 260px 0 0;
    }
`;

export const CreationsTitle = styled(Title)`
    text-align: center;
`;

export const CreationsText = styled(Text)`
    text-align: justify;
    @media screen and (${breakpoint.device.s}) {
        margin: 0 90px;
    }
`;
/* Slider */

export const CreationsSliderHeaderContainer = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media screen and (${breakpoint.device.s}) {
        justify-content: center;
    }
`;

export const CreationsSliderTextContainer = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    justify-content: space-between;
    column-gap: 35px;

    @media screen and (${breakpoint.device.s}) {
        overflow: visible;
    }
`;
export const CreationsSliderText = styled(BigText)`
    position: absolute;
    left: 100%;
    top: 0;
    right: 0;
    cursor: pointer;
    color: ${(props) => props.theme.color.green.default};

    &.visible {
        position: relative;
        left: 0;
    }

    &.selected {
        color: ${(props) => props.theme.color.orange};
    }

    @media screen and (${breakpoint.device.s}) {
        position: relative;
        left: 0;
    }
`;

export const CreationsSliderButton = styled.svg`
    cursor: pointer;
    @media screen and (${breakpoint.device.s}) {
        display: none;
    }
`;

/*Creation Item */

export const CreationsItemWrapper = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    transition: opacity 0.3s linear;

    @media screen and (${breakpoint.device.s}) {
        flex-direction: row;
        column-gap: 30px;
    }
`;

export const CreationItem = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    @media screen and (${breakpoint.device.s}) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        column-gap: 30px;
        width: 100%;
    }
`;

export const CreationsItemTitle = styled(MediumText)`
    display: flex;
    color: ${(props) => props.theme.color.green};
    @media screen and (${breakpoint.device.s}) {
        grid-column: 1/3;
        grid-row: 1;
        place-self: center;
    }
`;

/*--Images--*/
export const CreationsImageContainer = styled.article`
    display: flex;
    position: relative;
    background-color: black;
    border-radius: 20px;
`;
export const CreationsImage = styled.img`
    width: 100%;
    height: 330px;
    object-fit: cover;
    border-radius: 20px;
    opacity: 0.7;
    transition: opacity 0.3s linear;

    &:hover {
        opacity: 0.8;
    }

    @media screen and (${breakpoint.device.m}) {
        height: 400px;
    }
`;

export const CreationsImageTextContainer = styled.div`
    display: flex;
    margin: 0 30px 30px 30px;
    flex-direction: column;
    row-gap: 10px;
    position: absolute;
    bottom: 0;
    left: 0;

    @media screen and (${breakpoint.device.s}) {
        margin: 0 20px 20px 20px;
    }
`;

export const CreationsImageTitle = styled(MediumText)`
    color: ${(props) => props.theme.color.orange};
`;

export const CreationsImageText = styled(Text)`
    color: #fff;
`;
