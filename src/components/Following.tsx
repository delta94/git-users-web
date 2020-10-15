import React from 'react';

import { Box } from '../styles/components/user';

type FollowingProps = {
  following: number;
};

const Following = ({ following }: FollowingProps) => {
  return (
    <Box>
      <span>Seguindo</span> {following}
    </Box>
  );
};

export default Following;
