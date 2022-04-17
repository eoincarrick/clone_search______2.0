import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search1.p.rapidapi.com/google-search';

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResult = async (type) => {
    setIsLoading(!isLoading);

    try {
      const response = await fetch(`${baseUrl}${type}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'google-search1.p.rapidapi.com',
          'X-RapidAPI-Key':
            'cb9d4a1f5amshbb440aaee46c257p1dfa9bjsnefe6f50bb9f8',
        },
      });

      const data = await response.json();

      setResult(data);
      setIsLoading(isLoading);
    } catch (error) {
      console.log(`Error Message`);
      console.log(error);
    }
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
