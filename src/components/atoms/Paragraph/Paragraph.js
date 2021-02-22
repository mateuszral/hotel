import styled from 'styled-components';

const Paragraph = styled.p`
  margin: ${({ smallMargin, bigMargin, marginBottom }) => {
    if (smallMargin) return '5px 0';
    if (bigMargin) return '40px 0';
    if (marginBottom) return '0 0 15px';
    return '15px 0';
  }};
  font-weight: ${({ theme, semiBold }) => semiBold && theme.font.weight.semiBold};
  font-size: ${({ theme, smallFont }) =>
    smallFont ? theme.font.size.paragraph : theme.font.size.link};
  line-height: 26px;

  ${({ theme }) => theme.mq.tablet} {
    width: ${({ halfWidth }) => halfWidth && '50%'};
  }
`;

export default Paragraph;
