import React from 'react';

import {FooterContainer, CopyrightText} from './footer.styles';
import {PButton} from '../../sass/base/_typography.styles';
import H from '../typography/H.component';

const Footer = () => (
    <FooterContainer>
    <CopyrightText>
        <H size={"small"} text={"Handmande by "}><PButton>Bartoszkie</PButton></H>
    </CopyrightText>
    </FooterContainer>
);

export default Footer;