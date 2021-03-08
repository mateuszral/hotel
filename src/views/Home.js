import React from 'react';
import styled from 'styled-components';

import room from 'assets/images/room.png';
import beach from 'assets/images/beach.png';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Header from 'components/atoms/Header/Header';
import Image from 'components/atoms/Image/Image';

const StyledButton = styled(Button)`
  min-width: 150px;
  margin: 20px auto 0;
  display: block;

  ${({ theme }) => theme.mq.tablet} {
    margin: 20px 0 0;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${({ theme }) => theme.layout.mobileSidesPadding};
  text-align: center;
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 60px;
  width: 100%;
  margin: 30px 0;
  text-align: left;

  ${({ theme }) => theme.mq.tablet} {
    width: 80%;
    grid-template-columns: 2fr 3fr;
    align-items: center;

    div {
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 30px;
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        min-height: 250px;
        background-color: ${({ theme }) => theme.primary};
      }
    }
  }
`;

const Home = () => (
  <>
    <StyledContentWrapper>
      <Paragraph semiBold bigMargin>
        All our room types are including complementary breakfast.
      </Paragraph>
      <StyledCard>
        <div>
          <Header>Luxury redefined</Header>
          <Paragraph smallFont>
            Our rooms are designed to transport you into an environment made for
            leisure. Take your mind off the day-to-day of home life and find a
            private paradise for yourself.
          </Paragraph>
          <StyledButton>Explore</StyledButton>
        </div>
        <Image src={room} alt="" />
      </StyledCard>
      <StyledCard>
        <div>
          <Header>Leave your worries in the sand</Header>
          <Paragraph smallFont>
            We love life at the beach. Being close to the ocean with access to
            endless sandy beach ensures a relaxed state of mind. It seems like
            time stands still watching the ocean.
          </Paragraph>
          <StyledButton>Explore</StyledButton>
        </div>
        <Image src={beach} alt="" />
      </StyledCard>
    </StyledContentWrapper>
  </>
);

export default Home;
