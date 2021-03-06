import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='flex just-center items-center justify-center'>
      <Loader type='Puff' color='#00BFFF' height={550} width={80} />
    </div>
  );
};

export default Loading;
