import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHamburger = styled.button`
  position: fixed;
  top: 15px;
  right: 15px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.secondary};
  border: 0;
  border-radius: 10px;
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
    isMobileMenuOpen ? 'transparent' : theme.primary};
  position: absolute;

  &::before,
  &::after {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.primary};
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

const Hamburger = ({ handleLinkClick, isMobileMenuOpen }) => (
  <StyledHamburger onClick={handleLinkClick}>
    <StyledHamburgerBox>
      <StyledHamburgerInner isMobileMenuOpen={isMobileMenuOpen} />
    </StyledHamburgerBox>
  </StyledHamburger>
);

Hamburger.propTypes = {
  handleLinkClick: PropTypes.func.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
};

export default Hamburger;
