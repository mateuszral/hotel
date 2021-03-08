import React from 'react';

import {
  StyledWrapper,
  StyledHeader,
  StyledParagraph,
} from './Testimonials.styles';

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
