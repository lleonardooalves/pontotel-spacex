import { useEffect, useState } from 'react';
import { Launch } from '../types/launch';
import { getLaunches } from '../services/api';

export function useLaunchList() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filteredLaunches = launches.filter((launches) =>
    launches.name.toLowerCase().includes(search.toLowerCase()),
  );

  const fetchLaunches = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getLaunches();
      setLaunches(data);
    } catch (err) {
      setError('Failed to fetch launches');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  return {
    launches,
    loading,
    error,
    refetch: fetchLaunches,
    filteredLaunches,
    search,
    setSearch,
  };
}
