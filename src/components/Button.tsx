import React, { MouseEvent } from 'react';

import { BoxButton } from '../styles/components/user';

type ButtonProps = {
  title: string;
  handleRemoveUser: () => void;
};

const Button = ({title, handleRemoveUser}: ButtonProps) => {
  return (
    <BoxButton type="submit" onClick={handleRemoveUser}>
        {title}
    </BoxButton>
  );
};

export default Button;
