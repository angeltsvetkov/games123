import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonLink = ({ url, label, type }: { url: string, label: string, type: string }) => {

  const handleClick = () => {
    window.location.replace(url);
  };


  if (type && type == 'outlined') {
    return (<OutlinedButton onClick={handleClick}>
      {label}
    </OutlinedButton>)
  } else {
    return (
      <Button onClick={handleClick}>
        {label}
      </Button>
    )
  }
};

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

export default ButtonLink;
