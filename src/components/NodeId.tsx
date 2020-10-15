import React from 'react';

import { Box } from '../styles/components/user';

type NodeIdProps = {
  nodeId: string;
};

const NodeId = ({ nodeId }: NodeIdProps) => {
  return (
    <Box>
      <span>Node Id</span> {nodeId}
    </Box>
  );
};

export default NodeId;
