import styled from 'styled-components';

export const MovieResultsContainer = styled.section`
  grid-column: center-start / center-end;
  grid-row: 2 / 3;

  background-color: grey;

  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`;