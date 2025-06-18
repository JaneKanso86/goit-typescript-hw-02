export interface Urls {
  small: string;
  regular: string;
  full: string;
}
export interface ImageData {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
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
