import { useEffect, useState } from 'react';
import { Launch } from '../types/launch';
import { getLaunchById } from '../services/api';

export function useLaunchDetail(id: string) {
  const [launch, setLaunch] = useState<Launch | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getLaunchById(id);
      setLaunch(data);
    } catch (err) {
      setError('Failed to fetch launch details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  return { launch, loading, error, refetch: fetchDetails };
}
