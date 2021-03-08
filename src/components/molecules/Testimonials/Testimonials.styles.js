import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.header};
  font-family: 'adobe-garamond-pro', serif;
  margin-bottom: 15px;
`;

export const StyledParagraph = styled.p`
  margin: 5px 0;
  padding: 0 40px;
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;
