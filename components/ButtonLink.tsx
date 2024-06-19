import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonLink = ({ url, label, event, type = 'regular' }: { url: string, label: string, event: string, type: string }) => {
  // mixpanel.init('746e28b1f3129707e9b4821254378048', {debug: true, track_pageview: true, persistence: 'localStorage'});

  const handleClick = () => {
    window.location.replace(url);
  };


  if (type && type === 'outlined') {
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
