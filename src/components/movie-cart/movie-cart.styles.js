import styled from 'styled-components';

export const MovieCartContainer = styled.div`
    padding: .5rem .2rem;

    background-color: teal;

    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    ol {
        list-style: none;
        counter-reset: my-reset;
        width: 100%;

        & li {
            counter-increment: my-reset;

            &::before {
                content: counter(my-reset) ". ";
                color: black;
                font-weight: bold;
            }
        }
    }
`;

