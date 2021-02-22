import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BsFillCalendarFill } from 'react-icons/bs';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Header from 'components/atoms/Header/Header';
import Button from 'components/atoms/Button/Button';

const StyledHeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  z-index: -1;
`;

const StyledHeroWrapper = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    align-items: flex-start;
    text-align: left;
  }

  div {
    padding: 0 10%;
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  margin-top: 50px;
  padding: 15px;
  border-radius: 10px;

  ${({ theme }) => theme.mq.tablet} {
    align-self: center;
  }
`;

const HeroImage = ({ src }) => (
  <>
    <StyledHeroImage src={src} />
    <StyledHeroWrapper>
      <div>
        <Header>Welcome to</Header>
        <Header big>LUXURY</Header>
        <Header spacing>Hotels</Header>
        <Paragraph halfWidth>
          Book your stay and enjoy Luxury redefined at the most affordable rates.
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
