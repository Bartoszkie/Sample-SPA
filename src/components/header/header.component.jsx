import React from "react";

import '../../sass/base/_variables.styles.scss';

import { HeaderContainer } from "./header.styles";
import {H1} from '../../sass/base/_typography.styles';

const Header = () => (
  <HeaderContainer>
    <H1>Movie Rank</H1>
  </HeaderContainer>
);

export default Header;
