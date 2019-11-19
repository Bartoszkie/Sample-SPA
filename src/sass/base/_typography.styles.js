import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 6rem;
  font-weight: 100;

  @media only screen and (max-width: 56.25em) {
        font-size: 4rem; /* 900px */
    } 
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;

  @media only screen and (max-width: 37.5em) {
        font-size: 1.1rem; 
    }
`;

export const H4 = styled.h1`
  font-size: 2rem;
  font-weight: 400;
`;

export const PButton = styled.p`
  display: inline-block;
  font-family: 'Staatliches', cursive;
`;
