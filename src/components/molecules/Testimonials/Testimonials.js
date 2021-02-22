import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.header};
  font-family: 'adobe-garamond-pro', serif;
  margin-bottom: 15px;
`;

const StyledParagraph = styled.p`
  margin: 5px 0;
  padding: 0 40px;
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

const Testimonials = () => (
  <StyledWrapper>
    <StyledHeader>Testimonials</StyledHeader>
    <StyledParagraph smallFont smallMargin>
      &quot;Calm, Serene, Retro - What a way to relax and enjoy&quot;
    </StyledParagraph>
    <StyledParagraph smallFont smallMargin>
      Mr and Mrs. Baxter, UK
    </StyledParagraph>
  </StyledWrapper>
);

export default Testimonials;
