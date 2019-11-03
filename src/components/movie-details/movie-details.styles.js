import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 20rem);
`;

export const Poster = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 4;

    align-self: center;
    justify-self: center;

    img {
        width: 100%;
        height: 100%;

        border: none;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);
    }

`;

export const MovieDesctipion = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    color: white;

    align-self: center;
    justify-self: center;
`;