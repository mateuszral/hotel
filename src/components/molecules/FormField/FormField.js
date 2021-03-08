import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Label from 'components/atoms/Label/Label';
import Input from 'components/atoms/Input/Input';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = ({ label, name, id, type, ...props }) => (
  <StyledWrapper>
    <Label htmlFor={name}>{label}</Label>
    <Input name={name} id={id} type={type} {...props} />
  </StyledWrapper>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
