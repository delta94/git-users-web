import React from 'react';

import { Box } from '../styles/components/user';

type IdProps = {
  id: string;
};

const Id = ({ id }: IdProps) => {
  return (
    <Box>
      <span>id</span> {id}
    </Box>
  );
};

export default Id;
