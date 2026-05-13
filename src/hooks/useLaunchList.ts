import { useEffect, useState } from 'react';
import { getLaunches } from '../services/api';
import { useLaunchStore } from '../store/useLaunchStore';

export function useLaunchList() {
  const { launches, setLaunches } = useLaunchStore();
  const [loading, setLoading] = useState(launches.length === 0);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'success' | 'failed' | 'futures'>('all');

  const filteredLaunches = launches.filter((launch) => {
    const matchesSearch = launch.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'success' && launch.success === true) ||
      (statusFilter === 'failed' && launch.success === false) ||
      (statusFilter === 'futures' && launch.upcoming === true);
    return matchesSearch && matchesStatus;
  });

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
    loading,
    error,
    refetch: fetchLaunches,
    filteredLaunches,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
  };
}
