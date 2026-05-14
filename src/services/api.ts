import { Launch } from '../types/launch';

const BASE_URL = 'https://api.spacexdata.com/v5';

export const getLaunches = async (): Promise<Launch[]> => {
  const response = await fetch(`${BASE_URL}/launches`);

  if (!response.ok) {
    throw new Error(`Failed to fetch launches ${response.status}`);
  }

  return response.json();
};

export const getLaunchById = async (id: string): Promise<Launch> => {
  const response = await fetch(`${BASE_URL}/launches/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch launch ${response.status}`);
  }

  return response.json();
};
