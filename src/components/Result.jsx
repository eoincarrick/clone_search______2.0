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

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/videos') {
        getResult(`/search/q=${searchTerm} videos`);
      } else {
        getResult(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

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
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {result?.image_result?.map(
            ({ image, link: { href, title } }, index) => {
              return (
                <a href={href} key={index} className='sm:p-3 p-5'>
                  <img src={image?.src} alt={title} loading='lazy' />
                  <p className='w-36 break-words text-sm mt-2'>{title}</p>
                </a>
              );
            }
          )}
        </div>
      );
    case '/news':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
          {result?.entries?.map(({ links, id, title, source }) => (
            <div key={id} title={description} className='md:w-2/5 w-full '>
              <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                {title}
              </p>
              <a
                href={links?.[0].href}
                target='_blank'
                title={title}
                rel='noreferrer'
                className='hover:underline'
              >
                <p className='text-lg dark:text-blue-300 text-blue 700'>
                  {title}
                </p>
                <div className='flex gap-4'>
                  <a href={source?.href} target='_blank' rel='noreferrer'>
                    {source?.href}
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      );
    case '/videos':
      return 'SEARCH';

    default:
      return 'ERROR!';
  }
};

export default Result;
