import React from 'react';

import { BoxLoading, LoadingSpinner } from '../styles/components/loading';

const Loading = () => {
  return (
    <BoxLoading>
      <h2>Carregando...</h2>
      <LoadingSpinner />
    </BoxLoading>
  );
};

export default Loading;
