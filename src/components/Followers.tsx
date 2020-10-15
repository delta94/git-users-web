import React from 'react';

import { Box } from '../styles/components/user';

type FollowersProps = {
  followers: number;
};

const Followers = ({ followers }: FollowersProps) => {
  return (
    <Box>
      <span>Seguidores</span> {followers}
    </Box>
  );
};

export default Followers;
