import styled from "styled-components";

export const MovieResultsContainer = styled.section`
  grid-column: center-start / center-end;
  grid-row: 2 / 3;

  background-color: transparent;

  display: grid;
  grid-gap: 5rem;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;

  position: relative;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    color: white;
  }
`;

export const ResultsContainer = styled.div`
  grid-area: 0 / 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  ol {
    width: 100%;
    list-style: none;
    counter-reset: custom-styling;

    li {
      height: 5.5rem;
      counter-increment: custom-styling;

      &::before {
        content: counter(custom-styling);
        color: black;
        font-weight: bold;
      }
    }
  }
`;

export const DetailsContainer = styled.div`
    grid-column: 2 / 3;
    background-color: transparent;
`;
