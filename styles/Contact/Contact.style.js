import styled, { keyframes } from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Text } from 'styles/UI/Texts.style';

export const ContactSection = styled.section`
    padding: 0 15px;
    margin-top: 60px;

    display: grid;
    grid-template-columns: 1fr;
    row-gap: 40px;

    @media screen and (${breakpoint.device.s}) {
        padding: 0 40px;
        grid-template-columns: 1fr 1fr;
        column-gap: 50px;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 0 230px;
    }
    @media screen and (${breakpoint.device.lg}) {
        padding: 0 260px;
    }
`;

export const FormContainer = styled.article`
    @media screen and (${breakpoint.device.s}) {
        grid-row: 1 / span 2;
    }
`;
export const ContactText = styled(Text)`
    margin-top: 10px;
    text-align: justify;
`;

export const Form = styled.form`
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media screen and (${breakpoint.device.s}) {
        margin-top: 60px;
    }

    @media screen and (${breakpoint.device.m}) {
        margin-top: 100px;
    }
`;

const errorAnimation = keyframes`
    from {
        transform : translateX(0);
    }
    to {
        transform: translateX(10px);
    }
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    > p > span {
        color: ${(props) => props.theme.color.orange};
    }

    &.invalid > p {
        color: red;
        animation: ${errorAnimation} 0.3s linear;
        > span {
            color: red;
        }
    }
`;

export const FormInput = styled.input`
    padding: 5px;
    background-color: ${(props) => props.theme.color.beige};
    border: none;
    border-radius: 5px;
`;

export const RadioContainer = styled.div`
    display: flex;
    column-gap: 55px;
    justify-content: flex-end;
`;

export const RadioWrapper = styled.div`
    display: flex;
    column-gap: 5px;
    align-items: center;
`;

export const Radio = styled.input`
    height: 15px;
    width: 15px;
    appearance: none;
    border: 1px solid ${(props) => props.theme.color.orange};
    border-radius: 360px;

    &:checked {
        border: 6px solid ${(props) => props.theme.color.orange};
    }
`;

export const RadioLabel = styled.label`
    color: ${(props) => props.theme.color.green.default};
    font-size: 15px;
`;

export const QuestionArea = styled.textarea`
    padding: 5px;
    background-color: ${(props) => props.theme.color.beige};
    border: none;
    border-radius: 5px;
    resize: none;
`;
export const RequiredFieldText = styled.p`
    color: ${(props) => props.theme.color.orange};
    font-size: 10px;
`;
export const SubmitButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
export const SubmitButton = styled.input`
    background-color: ${(props) => props.theme.color.orange};
    padding: 20px;
    border: none;
    color: ${(props) => props.theme.color.green.default};
    border-radius: 5px;

    background-size: 200% 100%;
    background-image: linear-gradient(
        to right,
        ${(props) => props.theme.color.orange} 50%,
        ${(props) => props.theme.color.green.default} 50%
    );

    transition: 0.5s all;

    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.color.orange};
        background-position: -100% 0;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 20px;
`;

export const MapContainer = styled.article`
    @media screen and (${breakpoint.device.s}) {
        grid-column: 2;
    }
`;

export const Map = styled.iframe`
    width: 100%;
    height: 350px;
    border-radius: 20px;
`;
