import React from 'react';
import styled from 'styled-components';

import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Image from 'components/atoms/Image/Image';

import { facilities } from 'assets/data';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.layout.mobileSidesPadding};
`;

const StyledContentWrapper = styled.div`
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    width: 80%;
  }
`;

const StyledFacilityItem = styled.div`
  width: 100%;
  position: relative;
  margin: 20px 0;

  ${({ theme }) => theme.mq.tablet} {
    margin: 50px 0;
  }
`;

const StyledParagraph = styled(Paragraph)`
  padding: 10px;
  margin: 0;

  ${({ theme }) => theme.mq.tablet} {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.white};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const Facilities = () => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <Header>Facilities</Header>
        <Paragraph smallFont semiBold>
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can
          ensure an experience quite uniquw. Luxury hotels offers the perfect
          setting with stunning views for leisure and our modern luxury resort
          facilities will help you enjoy the best of all.
        </Paragraph>
        {facilities.map(({ name, image }) => (
          <StyledFacilityItem key={name}>
            <Image src={image} alt={name} />
            <StyledParagraph bold halfWidth>
              {name}
            </StyledParagraph>
          </StyledFacilityItem>
        ))}
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default Facilities;
