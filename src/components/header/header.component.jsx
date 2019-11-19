import React from "react";

import "../../sass/base/_variables.styles.scss";

import { connect } from "react-redux";
import { getResults } from "../../redux/movie-results/movie-results.utils";

import H from "../typography/H.component";

import {
  HeaderContainer,
  FormContainer,
  InputField,
  SubmitButton
} from "./header.styles";
import { H1, PButton } from "../../sass/base/_typography.styles";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ""
    };
  }

  render() {
    console.log(this.state.inputValue);

    const handleChange = e => {
      this.setState({
        inputValue: e.target.value
      });
    };

    const handleSubmit = e => {
      e.preventDefault();
      const { setMovieResults } = this.props;
      setMovieResults(this.state.inputValue);
    };

    return (
      <HeaderContainer>
        <H size={"big"} text={"Movie Rank"}></H>
        <FormContainer type="submit" onSubmit={handleSubmit}>
          <InputField onChange={handleChange}></InputField>
          <SubmitButton>
            <PButton>Search</PButton>
          </SubmitButton>
        </FormContainer>
      </HeaderContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setMovieResults: value => dispatch(getResults(value))
});

export default connect(null, mapDispatchToProps)(Header);
