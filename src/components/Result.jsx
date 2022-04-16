import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from '../components';

const Result = () => {
  const { result, isLoading, getResults, searchTerm, setSearchTerms } =
    useResultContext();
  const location = useLocation();

  if (isLoading) return <Loading />;

  switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }
};

export default Result;
