import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const MentionsLegalesSection = styled.section`
    color: ${(props) => props.theme.color.green.dark};

    padding: 0 15px;
    margin-top: 60px;

    text-align: justify;
    > div {
        > h2 {
            color: ${(props) => props.theme.color.orange};
            margin-bottom: 30px;
        }

        > h4 {
            margin-bottom: 10px;
            text-decoration: underline;
            color: ${(props) => props.theme.color.green.default};
        }

        > p {
            margin-bottom: 20px;
        }
    }

    @media screen and (${breakpoint.device.s}) {
        padding: 0 40px;
    }

    @media screen and (${breakpoint.device.m}) {
        padding: 0 230px;
    }

    @media screen and (${breakpoint.device.lg}) {
        padding: 0 260px;
    }
`;
