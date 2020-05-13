import { useState, useEffect } from 'react';

export const useApiKey = () => {
  const [apiKey, changeApiKey] = useState();
  
  const clearApiKey = () => {
    localStorage.removeItem('API_KEY');
    changeApiKey(null);
  };

  const setApiKey = apiKey => {
    localStorage.setItem('API_KEY', apiKey);
    changeApiKey(apiKey);
  };

  useEffect(() => {
    const apiKeyStorage = localStorage.getItem('API_KEY');
    if(apiKeyStorage) changeApiKey(apiKeyStorage);
  }, []);

  return { apiKey, setApiKey, clearApiKey };
};
