import { useState, useEffect } from 'react';
import api from "services/api";

interface useApiProps {
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete' | 'patch';
  params?: Record<string, unknown>;
}

const useApiCall = (options: useApiProps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | unknown>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api[options.method ?? 'get'](options.url, options);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [options]);

  return { data, error, loading };
};

export default useApiCall;