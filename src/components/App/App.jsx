import { useState, useEffect } from 'react';
import { fetchImages } from '../imageApi';
import { Toaster } from 'react-hot-toast';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';

import './App.module.css';
import React from 'react';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      try {
        setLoading(true);
        setError(null);
        setNoResults(false);

        const data = await fetchImages(query, page);

        if (data.results.length === 0 && page === 1) {
          setNoResults(true);
          return;
        }
        setTotalPages(data.total_pages);
        setImages((prev) =>
          page === 1 ? data.results : [...prev, ...data.results],
        );

        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Something went wrong...');
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
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
