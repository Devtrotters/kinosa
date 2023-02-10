import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Text, Title } from 'styles/UI/Texts.style';

export const HeaderSection = styled.section`
    padding: 30px 15px 60px 15px;
    background: ${(props) => props.theme.color.beige};

    margin-top: 60px;

    @media screen and (${breakpoint.device.s}) {
        padding: 60px 40px 100px 40px;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 60px 230px 100px 230px;
    }

    @media screen and (${breakpoint.device.lg}) {
        padding: 60px 260px 100px 260px;
    }
`;

export const HeaderContainer = styled.article`
    display: flex;
    flex-direction: column-reverse;
    row-gap: 40px;

    @media screen and (${breakpoint.device.s}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 50px;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    justify-content: center;
`;

export const HeaderTitle = styled(Title)`
    width: 80%;
`;
export const HeaderText = styled(Text).attrs({
    as: 'div'
})`
    text-align: justify;

    &:first-of-type {
        margin-top: 5px;
    }

    > p {
        > a {
            color: ${(props) => props.theme.color.orange};
        }
    }
`;

export const HeaderImage = styled.img`
    width: 100%;
    max-height: 300px;

    object-fit: cover;
    border-radius: 10px;

    @media screen and (${breakpoint.device.s}) {
        max-height: 480px;
    }
`;
