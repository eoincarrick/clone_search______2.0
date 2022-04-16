import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search1.p.rapidapi.com/google-search';

export const resultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(result);

  const getResult = async (type) => {
    setIsLoading(!isLoading);

    try {
      const response = await fetch(`${baseUrl}${type}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'google-search1.p.rapidapi.com',
          'x-rapidapi-key':
            'f01687c65emsheaaef840bfca25dp1de079jsn9678bec10359',
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
