import React, { useState } from 'react';
import styled from 'styled-components';

import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

import FormField from 'components/molecules/FormField/FormField';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const StyledHeader = styled.header`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
`;

const StyledHeading = styled(Header)`
  font-family: 'Montserrat', sans-serif;
`;

const StyledContentWrapper = styled.div`
  padding: 30px ${({ theme }) => theme.layout.mobileSidesPadding};

  ${({ theme }) => theme.mq.tablet} {
    padding: 100px 50px;
  }

  ${({ theme }) => theme.mq.bigTablet} {
    padding: 100px 150px;
  }

  & > div {
    margin-top: 50px;

    ${({ theme }) => theme.mq.tablet} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    div {
      span {
        display: flex;
        align-items: center;
        font-size: ${({ theme }) => theme.font.size.link};
        font-weight: ${({ theme }) => theme.font.weight.bold};
        margin: 20px 0;
        cursor: pointer;

        svg {
          margin-left: 20px;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;

      ${Button} {
        margin-top: 25px;
        text-transform: initial;
        align-self: flex-end;
      }
    }
  }
`;

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    setFormValues(initialFormState);
  };

  return (
    <div>
      <StyledHeader>
        <StyledHeading>Contact-us</StyledHeading>
      </StyledHeader>
      <StyledContentWrapper>
        <Header>We are here for you</Header>
        <span>
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, compaints or requests, please forward it to our support
          desk and we will get back to you as soon as possible.
        </span>
        <div>
          <div>
            <Paragraph>
              497 Evergreen Rd. Roseville, <br /> CA 95673
            </Paragraph>
            <span>
              View map
              <HiOutlineArrowNarrowRight />
            </span>
            <Paragraph smallMargin>Phone: +44 345 678 903</Paragraph>
            <Paragraph smallMargin>Email: luxury_hotels@gmail.com</Paragraph>
          </div>
          <form onSubmit={handleSendMessage}>
            <FormField
              label="Name"
              name="name"
              id="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <FormField
              label="Email Address"
              name="email"
              id="email"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
            <FormField
              label="Message"
              name="message"
              id="message"
              as="textarea"
              rows="5"
              value={formValues.message}
              onChange={handleInputChange}
            />
            <Button>Submit</Button>
          </form>
        </div>
      </StyledContentWrapper>
    </div>
  );
};

export default Contact;
