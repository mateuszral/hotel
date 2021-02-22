import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Hamburger from 'components/atoms/Hamburger/Hamburger';

import { routes } from 'routes';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  z-index: ${({ theme }) => theme.zIndex.level1};
  list-style: none;
  transform: ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen ? 'translateX(0%)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    position: absolute;
    height: 100px;
    flex-direction: row;
    justify-content: space-around;
    background-color: transparent;
    transform: none;
  }
`;

const StyledLogo = styled.span`
  width: 100%;
  padding: 20px 30px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  font-family: 'adobe-garamond-pro', serif;

  ${({ theme }) => theme.mq.tablet} {
    background-color: ${({ theme }) => theme.secondary};
    width: initial;
    height: 100%;
  }
`;

const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
`;

const StyledListItem = styled.li`
  padding: 10px 35px;

  ${({ theme }) => theme.mq.tablet} {
    color: ${({ theme }) => theme.white};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme, big }) => big && theme.font.size.header};
  margin: 0;
`;

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <StyledNav isMobileMenuOpen={isMobileMenuOpen}>
        <StyledLogo>
          <StyledLink onClick={() => setIsMobileMenuOpen(false)} to={routes.home}>
            <StyledParagraph big>LUXURY</StyledParagraph>
            <StyledParagraph>HOTELS</StyledParagraph>
          </StyledLink>
        </StyledLogo>
        <StyledListWrapper>
          {Object.entries(routes).map(([key, property]) => (
            <StyledListItem key={key}>
              <StyledLink onClick={() => setIsMobileMenuOpen(false)} to={property}>
                {key.toUpperCase()}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledListWrapper>
      </StyledNav>
      <Hamburger handleLinkClick={handleLinkClick} isMobileMenuOpen={isMobileMenuOpen} />
    </>
  );
};

export default Navigation;
