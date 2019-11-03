import React from 'react';

import {FooterContainer, CopyrightText} from './footer.styles';
import {H4, PButton} from '../../sass/base/_typography.styles';

const Footer = () => (
    <FooterContainer>
    <CopyrightText>
        <H4>Handmande by <PButton>Bartoszkie</PButton></H4>
    </CopyrightText>
    </FooterContainer>
);

export default Footer;