import styled from 'styled-components';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

export const StyledFooter = styled.footer`
  width: 100%;
  margin-top: 100px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  position: relative;
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    width: 100px;
    height: 100px;
    transform: translateX(-50%) rotate(45deg);
    background-color: ${({ theme }) => theme.primary};
    z-index: -1;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  font-family: 'adobe-garamond-pro', serif;
  margin: ${({ marginBottom }) => (marginBottom ? '0 0 15px' : '5px 0')};
  text-align: center;
  text-transform: uppercase;

  ${({ theme }) => theme.mq.tablet} {
    width: 100px;
  }
`;

export const StyledAddress = styled.span`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.button};

  ${({ theme }) => theme.mq.tablet} {
    text-align: left;
  }
`;

export const StyledContentWrapper = styled.div`
  margin: 20px 40px;
  display: flex;
  flex-direction: column;
`;

export const StyledListWrapper = styled.ul`
  margin: 20px 40px;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const StyledButton = styled(Button)`
  margin: ${({ noMargin }) => noMargin && '0'};
  border-top-left-radius: initial;
  border-bottom-left-radius: initial;
  padding: 10px;

  span {
    margin-left: 10px;
  }

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    align-items: center;
    text-align: left;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  input {
    color: ${({ theme }) => theme.white};
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.secondary};
    padding: 10px 15px;
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    &::placeholder {
      color: ${({ theme }) => theme.white};
    }
  }

  button {
    padding: 8px;
    border: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
