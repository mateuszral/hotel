import styled from 'styled-components';

const Header = styled.h2`
  font-family: 'adobe-garamond-pro', serif;
  font-size: ${({ theme, big }) => (big ? theme.font.size.header : theme.font.size.link)};
  letter-spacing: ${({ spacing }) => spacing && '10px'};
  text-transform: uppercase;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme, big }) => (big ? theme.font.size.bigHeader : theme.font.size.header)};
    margin: ${({ big }) => big && '-20px 0'};
  }
`;

export default Header;
