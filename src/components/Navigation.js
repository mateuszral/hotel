import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  ${({ theme }) => theme.mq.bigTablet} {
    height: 100px;
    flex-direction: row;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.white};
    transform: none;
  }
`;

const StyledLogo = styled.span`
  width: 100%;
  padding: 20px 30px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  font-family: adobe-garamond-pro, serif;

  ${({ theme }) => theme.mq.bigTablet} {
    background-color: ${({ theme }) => theme.secondary};
    width: initial;
    height: 100%;
  }
`;

const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.bigTablet} {
    flex-direction: row;
  }
`;

const StyledListItem = styled.li`
  padding: 10px 35px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme, big }) => big && theme.font.size.header};
  margin: 0;
`;

const StyledHamburger = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  transition: transform 0.3s ease-in-out;
  z-index: ${({ theme }) => theme.zIndex.level1};
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

const StyledHamburgerBox = styled.span`
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

const StyledHamburgerInner = styled.span`
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;
  width: 100%;
  height: 3px;
  background-color: ${({ theme, isMobileMenuOpen }) =>
    isMobileMenuOpen ? 'transparent' : theme.black};
  position: absolute;
  &::before,
  &::after {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.black};
    /* background-color: ${({ theme, isMobileMenuOpen }) =>
      isMobileMenuOpen ? theme.white : theme.black}; */
    position: absolute;
    content: '';
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out, background-color 0.1s 0.2s ease-in-out;
  }
  &::before {
    top: -10px;
    transform: ${({ isMobileMenuOpen }) => isMobileMenuOpen && 'translateY(10px) rotate(45deg)'};
  }
  &::after {
    top: 10px;
    transform: ${({ isMobileMenuOpen }) => isMobileMenuOpen && 'translateY(-10px) rotate(-45deg)'};
  }
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
      <StyledHamburger onClick={handleLinkClick}>
        <StyledHamburgerBox>
          <StyledHamburgerInner isMobileMenuOpen={isMobileMenuOpen} />
        </StyledHamburgerBox>
      </StyledHamburger>
    </>
  );
};

export default Navigation;
