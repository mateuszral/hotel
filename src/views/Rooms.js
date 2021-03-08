import React from 'react';
import styled from 'styled-components';

import Header from 'components/atoms/Header/Header';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Image from 'components/atoms/Image/Image';

import { rooms } from 'assets/data';

import { BsFillPlusCircleFill } from 'react-icons/bs';

const StyledWrapper = styled.div`
  padding: 25px ${({ theme }) => theme.layout.mobileSidesPadding};
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    padding: 50px 250px;
  }
`;

const StyledRoomItem = styled.div`
  position: relative;
  margin: 20px 0;

  ${({ theme }) => theme.mq.tablet} {
    margin: 50px 0;
  }

  ${Paragraph} {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin: -4px 0;
    padding: 20px;
  }

  ${Button} {
    padding: 10px;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px;
    border-left: 2px solid ${({ theme }) => theme.primary};
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    border-right: 2px solid ${({ theme }) => theme.primary};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    span {
      display: flex;
      align-items: center;
      font-weight: ${({ theme }) => theme.font.weight.bold};
      text-transform: uppercase;
      cursor: pointer;

      svg {
        margin-right: 15px;
        color: ${({ theme }) => theme.secondary};
        font-size: ${({ theme }) => theme.font.size.icon};
      }
    }
  }
`;

const Rooms = () => {
  return (
    <StyledWrapper>
      <Header>Rooms and rates</Header>
      <span>
        Each of our bright, light-flooded rooms come with everything you could
        possibly need for a comfortable stay. And yes, comfort isn’t our only
        objective, we also value good design, sleek contemporary furnishing
        complemented by the rich tones of nature’s palette as visible from our
        rooms’ sea-view windows and terraces.
      </span>
      {rooms.map(({ name, price, image }) => (
        <StyledRoomItem key={name}>
          <Image src={image} />
          <Paragraph>{name}</Paragraph>
          <div>
            <span>
              <BsFillPlusCircleFill />
              View room details
            </span>
            <Button>${price}/night</Button>
          </div>
        </StyledRoomItem>
      ))}
    </StyledWrapper>
  );
};

export default Rooms;
