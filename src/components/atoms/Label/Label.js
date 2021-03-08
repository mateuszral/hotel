import styled from 'styled-components';

const Label = styled.label`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.primary};
`;

export default Label;
