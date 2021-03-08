import React from 'react';
import PropTypes from 'prop-types';

import { BsFillCalendarFill } from 'react-icons/bs';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Header from 'components/atoms/Header/Header';

import {
  StyledHeroImage,
  StyledHeroWrapper,
  StyledButton,
} from './HeroImage.styles';

const HeroImage = ({ src }) => (
  <>
    <StyledHeroImage src={src} />
    <StyledHeroWrapper>
      <div>
        <Header>Welcome to</Header>
        <Header big>LUXURY</Header>
        <Header spacing>Hotels</Header>
        <Paragraph halfWidth>
          Book your stay and enjoy Luxury redefined at the most affordable
          rates.
        </Paragraph>
      </div>
      <StyledButton>
        <BsFillCalendarFill />
        <span>Book now</span>
      </StyledButton>
    </StyledHeroWrapper>
  </>
);

HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default HeroImage;
