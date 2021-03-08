import React from 'react';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import {
  StyledFooter,
  StyledContentWrapper,
  StyledParagraph,
  StyledAddress,
  StyledListWrapper,
  StyledButton,
  StyledInputWrapper,
} from './Footer.styles';

const Footer = () => (
  <StyledFooter>
    <StyledContentWrapper>
      <StyledParagraph>Luxury</StyledParagraph>
      <StyledParagraph smallFont marginBottom>
        hotels
      </StyledParagraph>
      <StyledAddress>497 Evergreen Rd. Roseville, CA 95673</StyledAddress>
      <StyledAddress>+44 345 678 903</StyledAddress>
      <StyledAddress>luxury_hotels@gmail.com</StyledAddress>
    </StyledContentWrapper>
    <StyledListWrapper>
      <li>
        <StyledButton transparentBackground>About us</StyledButton>
      </li>
      <li>
        <StyledButton transparentBackground>Contact</StyledButton>
      </li>
      <li>
        <StyledButton transparentBackground>Terms & Conditions</StyledButton>
      </li>
    </StyledListWrapper>
    <StyledListWrapper>
      <li>
        <StyledButton transparentBackground>
          <FaFacebookF />
          <span>Facebook</span>
        </StyledButton>
      </li>
      <li>
        <StyledButton transparentBackground>
          <FaTwitter />
          <span>Twitter</span>
        </StyledButton>
      </li>
      <li>
        <StyledButton transparentBackground>
          <FaInstagram />
          <span>Instagram</span>
        </StyledButton>
      </li>
    </StyledListWrapper>
    <StyledContentWrapper>
      <span>Subscribe to our newsletter</span>
      <StyledInputWrapper>
        <input type="text" placeholder="Email Adress" />
        <StyledButton primaryColor noMargin>
          OK
        </StyledButton>
      </StyledInputWrapper>
    </StyledContentWrapper>
  </StyledFooter>
);

export default Footer;
