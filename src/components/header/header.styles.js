import styled from 'styled-components';

export const HeaderContainer = styled.section`
    grid-column: full-start / full-end;
    grid-row: 1 / 2; 

    color: #fff;

    background-color: #333;

    display: grid;
    grid-template-columns: minmax(6rem, 1fr) repeat(8, minmax(min-content, 24rem)) minmax(6rem, 1fr);

    h1 {
        grid-column: 2 / 4;
    }
`;

export const FormContainer = styled.form`
    justify-self: center;
    align-self: center;
    grid-column: 5 / 7;
`;

export const InputField = styled.input`
    text-align: left;

    width: 10vw;

    padding: 1rem .5rem 1rem .9rem;
    border: none;
    border-radius: 10rem 0 0 10rem;
`;

export const SubmitButton = styled.button`
    background-color: black;
    color: white;

    width: 3vw;

    cursor: pointer;

    padding: 1rem .5rem;
    border: none;
    border-radius: 0 10rem 10rem 0;
`;
