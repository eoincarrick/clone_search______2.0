import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from '../components';

const Result = () => {
  const { result, isLoading, getResult, searchTerm, setSearchTerm } =
    useResultContext();

  console.log(result);
  const location = useLocation();

  // useEffect(() => {
  //   getResult('/search/q=Rock&num=40');
  // }, []);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {result?.result?.map(({ link, title, description }, index) => (
            <div key={index} title={description} className='md:w-2/5 w-full '>
              <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                {title}
              </p>
              <a href={link} target='_blank' title={link} rel='noreferrer'>
                <p className='text-sm'>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return 'SEARCH';
    case '/news':
      return 'SEARCH';
    case '/videos':
      return 'SEARCH';

    default:
      return 'ERROR!';
  }
};

export default Result;
