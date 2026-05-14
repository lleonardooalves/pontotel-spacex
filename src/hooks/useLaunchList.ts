import { useEffect, useState } from 'react';
import { getLaunches } from '../services/api';
import { useLaunchStore } from '../store/useLaunchStore';

export function useLaunchList() {
  const { launches, setLaunches } = useLaunchStore();
  const [loading, setLoading] = useState(launches.length === 0);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'success' | 'failed' | 'upcoming'>(
    'all',
  );
  const [refreshing, setRefreshing] = useState(false);

  const filteredLaunches = launches.filter((launch) => {
    const matchesSearch = launch.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'success' && launch.success === true) ||
      (statusFilter === 'failed' && launch.success === false) ||
      (statusFilter === 'upcoming' && launch.upcoming === true);
    return matchesSearch && matchesStatus;
  });

  const fetchLaunches = async (mode: 'initial' | 'refresh' | 'cache' = 'initial') => {
    try {
      if (mode === 'initial') setLoading(true);
      if (mode === 'refresh') setRefreshing(true);
      setError(null);
      const data = await getLaunches();
      setLaunches(data);
    } catch {
      setError('Failed to fetch launches');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchLaunches(launches.length === 0 ? 'initial' : 'cache');
  }, []);

  return {
    loading,
    error,
    refetch: () => fetchLaunches('refresh'),
    filteredLaunches,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    refreshing,
  };
}
