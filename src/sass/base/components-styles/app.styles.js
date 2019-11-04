import styled from 'styled-components'; 

export const AppContainer = styled.section`
    display: grid; 
    grid-template-rows: min-content 1fr 8vh; 
    grid-template-columns: [full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 24rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];
    height: 100vh;
    row-gap: 2rem;
`;