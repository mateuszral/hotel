import styled from 'styled-components';

const Button = styled.button`
  color: ${({ theme, primaryColor }) =>
    primaryColor ? theme.primary : theme.white};
  background-color: ${({ theme, transparentBackground }) =>
    transparentBackground ? 'transparent' : theme.secondary};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin: 5px 0;
  padding: 20px;
  border: 0;
  border-radius: 5px;
  text-transform: uppercase;

  span {
    margin-left: 10px;
  }
`;

export default Button;
