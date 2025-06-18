import axios from 'axios';

import { ApiResponse } from '../components/types';

const ACCESS_KEY = import.meta.env.VITE_REACT_API_KEY;

interface RequestParams {
  query: string;
  page: number;
}

export const getUnsplashData = async ({
  query,
  page,
}: RequestParams): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    'https://api.unsplash.com/search/photos',
    {
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
      params: {
        query,
        page,
        per_page: 15,
        orientation: 'landscape',
        content_filter: 'high',
      },
    },
  );

  console.log('API response:', response.data);
  return response.data;
};
