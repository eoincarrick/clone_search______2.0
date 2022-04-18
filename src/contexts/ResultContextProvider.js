import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search1.p.rapidapi.com/google-search';

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResult = async (type) => {
    setIsLoading(!isLoading);

    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'google-search1.p.rapidapi.com',
        'X-RapidAPI-Key': 'f01687c65emsheaaef840bfca25dp1de079jsn9678bec10359',
      },
    });

    const data = await response.json();

    console.log({ type, data });
    if (type.includes('/news')) {
      setResult(data.entries);
    } else if (type.includes('images')) {
      setResult(data.image_results);
    } else {
      setResult(data.results);
    }

    setResult(data);
    setIsLoading(isLoading);
  };

  return (
    <ResultContext.Provider
      value={{ getResult, result, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
