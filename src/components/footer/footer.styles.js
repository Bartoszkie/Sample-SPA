import styled from 'styled-components';

export const FooterContainer = styled.section`
    grid-column: full-start / full-end;
    grid-row: 3 / 4;
    background-color: black;

    border-top: .1rem solid #fc4445;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CopyrightText = styled.div`
    color: white;
`;
