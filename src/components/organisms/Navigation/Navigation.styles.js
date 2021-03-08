import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
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

export const StyledLogo = styled.span`
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

export const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
`;

export const StyledListItem = styled.li`
  padding: 10px 35px;

  ${({ theme }) => theme.mq.tablet} {
    color: ${({ theme }) => theme.white};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: -7px;
    width: calc(100% + 14px);
    height: 1px;
    background-color: ${({ theme }) => theme.white};
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &.active-link {
    &::after {
      opacity: 1;
    }
  }
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme, big }) => big && theme.font.size.header};
  margin: 0;
`;
