import styled from "styled-components";

export const HeaderContainer = styled.section`
  grid-column: full-start / full-end;
  grid-row: 1 / 2;

  display: grid;
  grid-template-columns: minmax(6rem, 1fr) repeat(8, minmax(min-content, 24rem)) minmax(
      6rem,
      1fr
    );

  color: #fff;

  background-color: transparent;

  h1 {
    font-family: "Lobster", cursive;
    color: #950740;
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

  width: 12vw;
  height: 5rem;

  outline: none;


  padding-left: 2rem;

  border-left: 0.2rem solid #950740;
  border-top: 0.2rem solid #950740;
  border-right: none;
  border-bottom: 0.2rem solid #950740;

  border-radius: 10rem 0 0 10rem;
`;

export const SubmitButton = styled.button`
  position: relative;
  display: inline-block;

  background-color: transparent;
  color: white;

  width: 5vw;
  height: 5rem;

  cursor: pointer;

  outline: none;

  border-top: 0.2rem solid #950740;
  border-right: 0.2rem solid #950740;
  border-bottom: 0.2rem solid #950740;
  border-left: none;
  border-radius: 0 10rem 10rem 0;

  p {
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    text-shadow: none;
    transition: 0.1s ease-in-out all;
  }

  &:hover p {
    text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
      #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
      #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px,
      -5px -5px 10px rgba(206, 206, 206, 0);
  }
`;
