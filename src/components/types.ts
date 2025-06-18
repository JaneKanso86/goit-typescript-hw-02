export interface Urls {
  small: string;
  regular: string;
  full: string;
}
export interface ImageData {
  id: string;
  alt_description: string;
  description: string | null;
  width: number;
  height: number;
  likes: number;
  user: {
    name: string;
    portfolio_url?: string;
  };
  urls: Urls;
}

export interface ImagePositionProps {
  top: string;
  left: string;
  width: string;
  height: string;
}
export interface ApiResponse {
  total: number;
  total_pages: number;
  results: ImageData[];
}
