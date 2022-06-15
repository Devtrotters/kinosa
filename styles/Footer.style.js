import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import { Text, Title } from 'styles/UI/Texts.style';

export const Feed = styled.section`
    margin-top: 100px;
    padding: 100px 15px;
    background-color: ${(props) => props.theme.color.beige};
    border-radius: 30px 30px 0 0;

    @media screen and (${breakpoint.device.s}) {
        padding: 100px 40px;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 100px 65px;
        margin: 100px 165px 0 165px;
    }

    @media screen and (${breakpoint.device.lg}) {
        padding: 100px 95px;
    }
`;

export const Instagram = styled.article`
    margin-top: 40px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    column-gap: 30px;

    @media screen and (${breakpoint.device.s}) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const FeedLink = styled.a`
    font-size: 15px;
    font-weight: normal;
    color: ${(props) => props.theme.color.green.dark};
`;

export const InstagramImgLink = styled(FeedLink)`
    display: block;

    &:last-of-type {
        display: none;
    }

    @media screen and (${breakpoint.device.s}) {
        &:last-of-type {
            display: block;
        }
    }
`;

export const InstagramImg = styled.img`
    width: 100%;
    height: 100%;

    border-radius: 10px;
`;

export const NewsLetter = styled.section`
    position: relative;

    &::before {
        content: ' ';
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;

        height: 60%;

        background: ${(props) => props.theme.color.green.default};
        border-radius: 20px 20px 0 0;
    }
`;

export const NewsLetterContainer = styled.div`
    // background: ${(props) => props.theme.color.beige};

    @media screen and (${breakpoint.device.m}) {
        margin: 0 165px;
    }
`;

export const NewsLetterWrapper = styled.article`
    margin: 0 15px;
    padding: 40px 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;

    position: relative;

    background: white;
    border-radius: 10px;

    @media screen and (${breakpoint.device.s}) {
        margin: 0 45px;
        padding: 40px 80px;
    }

    @media screen and (${breakpoint.device.m}) {
        margin: 0 190px;
    }
`;

export const NewsLetterTitle = styled(Title)`
    text-align: center;
`;

export const NewsLetterText = styled(Text)`
    text-align: center;
`;

export const NewsLetterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    width: 100%;

    @media screen and (${breakpoint.device.s}) {
        display: grid;
        grid-template-columns: 1fr fit-content(100%);
        column-gap: 20px;
    }
`;

export const NewsLetterInput = styled.input`
    width: 100%;

    padding: 15px 0 15px 20px;

    border: 1px solid ${(props) => props.theme.color.green.default};
    border-radius: 10px;

    color: ${(props) => props.theme.color.green.dark};
`;

export const NewsLetterButton = styled.input`
    width: 50%;

    margin: 0 75px;
    padding: 15px;

    color: ${(props) => props.theme.color.green.dark};
    background-color: ${(props) => props.theme.color.orange};
    border: none;
    border-radius: 10px;

    text-align: center;

    &:hover {
        cursor: pointer;
    }

    @media screen and (${breakpoint.device.s}) {
        margin: 0;
        width: 100%;
    }
`;

export const RGPDContainer = styled.div`
    align-self: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    width: 100%;

    @media screen and (${breakpoint.device.s}) {
        align-items: start;
    }
`;

export const RGPDWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
`;

export const InputRGPD = styled.input``;

export const InputRGPDLabel = styled.label`
    font-size: 10px;
    color: ${(props) => props.theme.color.green.dark};
    white-space: nowrap;

    @media screen and (${breakpoint.device.s}) {
        font-size: 12px;
    }
`;

export const InputRGPDLegal = styled.p`
    font-size: 8px;
    color: #a9a9a9;
    white-space: nowrap;
    align-self: center;
    margin-top: 5px;

    @media screen and (${breakpoint.device.s}) {
        font-size: 10px;
        margin-top: 10px;
    }
`;

export const FooterContainer = styled.footer`
    padding: 60px 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.color.green.default};

    @media screen and (${breakpoint.device.s}) {
        padding: 60px 40px;

        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 60px 230px;
    }

    @media screen and (${breakpoint.device.lg}) {
        padding: 60px 260px;
    }
`;

export const HorairesSection = styled.section`
    margin-top: 20px;
    width: 100%;
    @media screen and (${breakpoint.device.s}) {
        grid-column: 1 / 1;
        grid-row: 2 / 2;
    }
`;

export const HorairesText = styled.p`
    font-size: 20px;
    color: ${(props) => props.theme.color.white};
    text-align: center;

    &:first-of-type {
        color: ${(props) => props.theme.color.orange};
    }

    @media screen and (${breakpoint.device.s}) {
        text-align: left;
    }
`;

export const ContactSection = styled.section`
    margin-top: 20px;
    width: 100%;
    @media screen and (${breakpoint.device.s}) {
        grid-column: 1 / 1;
        grid-row: 3 / 3;
    }
`;

export const ContactText = styled.a`
    text-align: center;
    display: block;
    font-size: 20px;
    color: ${(props) => props.theme.color.white};

    @media screen and (${breakpoint.device.s}) {
        text-align: left;
    }
`;

export const PdvSection = styled.section`
    margin-top: 20px;
    width: 100%;
    @media screen and (${breakpoint.device.s}) {
        grid-column: 2 / 2;
        grid-row: 2 / 2;
    }
`;

export const PdvText = styled.a`
    text-align: center;
    display: block;
    font-size: 20px;
    color: ${(props) => props.theme.color.white};

    @media screen and (${breakpoint.device.s}) {
        text-align: left;
    }
`;

export const SiegeSection = styled.section`
    margin-top: 20px;
    width: 100%;
    @media screen and (${breakpoint.device.s}) {
        grid-column: 2 / 2;
        grid-row: 3 / 3;
    }
`;

export const SiegeText = styled.a`
    text-align: center;
    display: block;
    font-size: 20px;
    color: ${(props) => props.theme.color.white};

    @media screen and (${breakpoint.device.s}) {
        text-align: left;
    }
`;

export const SocialSection = styled.section`
    margin-top: 20px;
    @media screen and (${breakpoint.device.s}) {
        grid-row: 4 / 4;
        grid-column: 1 / 1;
    }
`;

export const SocialText = styled(Text)`
    margin-top: 30px;

    font-size: 20px;
    color: ${(props) => props.theme.color.white};
`;

export const SocialLogoContainer = styled.article`
    margin-top: 10px;
    display: grid;
    grid-template-columns: fit-content(100%) fit-content(100%) fit-content(100%);
    justify-content: center;
    column-gap: 20px;

    @media screen and (${breakpoint.device.s}) {
        justify-content: start;
    }
`;

export const MapContainer = styled.section`
    width: 100%;
    margin-top: 55px;

    @media screen and (${breakpoint.device.s}) {
        grid-row: 1 / span 3;
        margin-top: 0;
    }
`;

export const Map = styled.iframe`
    height: 280px;
    width: 100%;
    border: 0;
    border-radius: 20px;
`;

export const MenuContainer = styled.section`
    margin-top: 40px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 20px;
    column-gap: 30px;

    @media screen and (${breakpoint.device.s}) {
        grid-row: 5 / 5;
        grid-column: 1 / span 2;

        justify-content: center;
        column-gap: 40px;
    }

    @media screen and (${breakpoint.device.m}) {
        width: 60%;
        margin: 40px auto 0 auto;
    }
`;

export const MenuText = styled.a`
    font-size: 30px;
    color: ${(props) => props.theme.color.white};

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.color.orange};
    }
`;
