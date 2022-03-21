import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search1.p.rapidapi.com/';

export const resultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResult = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search1.p.rapidapi.com',
        'x-rapidapi-key': 'f01687c65emsheaaef840bfca25dp1de079jsn9678bec10359',
      },
    });
  }
};
