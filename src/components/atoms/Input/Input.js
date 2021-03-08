import styled from 'styled-components';

const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.primary};
  width: 100%;
  outline: none;
`;

export default Input;
