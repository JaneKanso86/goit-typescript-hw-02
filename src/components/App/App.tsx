import { useState, useEffect } from 'react';
import { ImageData, ApiResponse } from '../types';
import { getUnsplashData } from '../galleri';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';

import './App.css';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<ImageData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [noResults, setNoResults] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      try {
        setLoading(true);
        setError(null);
        setNoResults(false);

        const data: ApiResponse = await getUnsplashData({ query, page });

        if (data.results.length === 0 && page === 1) {
          setNoResults(true);
          return;
        }
        setTotalPages(data.total_pages);
        setImages((prev) =>
          page === 1 ? data.results : [...prev, ...data.results],
        );
      } catch (err) {
        setError('Something went wrong...');
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = (): void => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />

      {(error || noResults) && (
        <ErrorMessage
          message={error || 'No results found. Please try another search term.'}
        />
      )}

      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && !loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          image={selectedImage}
        />
      )}
    </>
  );
}
