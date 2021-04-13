import styled from 'styled-components';

import breakpoints from './breakpoints';

export const Title = styled.h1`
    font-size: 30px;
    font-weight: normal;
    color: ${(props) => props.theme.color.green.default};

    @media all and (${breakpoints.device.s}) {
        font-size: 40px;
    }
`;

export const Subtitle = styled.h2`
    font-size: 30px;
    font-weight: normal;
    color: ${(props) => props.theme.color.green.default};
`;

export const BigText = styled.h3`
    font-size: 25px;
    font-weight: normal;
    color: ${(props) => props.theme.color.green.dark};
`;

export const MediumText = styled(BigText).attrs({
    as: 'h4'
})`
    font-size: 20px;
`;

export const Text = styled(BigText).attrs({
    as: 'p'
})`
    font-size: 15px;
`;
