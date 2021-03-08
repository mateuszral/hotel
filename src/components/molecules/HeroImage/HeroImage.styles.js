import styled from 'styled-components';

import Button from 'components/atoms/Button/Button';

export const StyledHeroImage = styled.div`
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

export const StyledHeroWrapper = styled.header`
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

export const StyledButton = styled(Button)`
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
