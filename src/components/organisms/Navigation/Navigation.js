import React, { useState } from 'react';

import Hamburger from 'components/atoms/Hamburger/Hamburger';

import { routes } from 'routes';

import {
  StyledNav,
  StyledLogo,
  StyledLink,
  StyledParagraph,
  StyledListWrapper,
  StyledListItem,
} from './Navigation.styles';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <StyledNav isMobileMenuOpen={isMobileMenuOpen}>
        <StyledLogo>
          <StyledLink
            onClick={() => setIsMobileMenuOpen(false)}
            to={routes.home}
          >
            <StyledParagraph big>LUXURY</StyledParagraph>
            <StyledParagraph>HOTELS</StyledParagraph>
          </StyledLink>
        </StyledLogo>
        <StyledListWrapper>
          {Object.entries(routes).map(([key, property]) => (
            <StyledListItem key={key}>
              <StyledLink
                exact
                activeClassName="active-link"
                onClick={() => setIsMobileMenuOpen(false)}
                to={property}
              >
                {key.toUpperCase()}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledListWrapper>
      </StyledNav>
      <Hamburger
        handleLinkClick={handleLinkClick}
        isMobileMenuOpen={isMobileMenuOpen}
      />
    </>
  );
};

export default Navigation;
