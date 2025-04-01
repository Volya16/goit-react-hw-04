import { useEffect, useState } from "react";

import fetchImges from "../../api/apiServise";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoaderMoreBtn/LoaderMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [currentImg, setCurrentImg] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async (value) => {
    setLoading(true);
    setSearchTerm(value);
    setPage(1);
    setImages([]);
  };

  const handlecLoadMore = () => {
    setPage((page) => page + 1);
  };

  const handleOpenModal = (img) => {
    console.log("Відкриваємо модальне вікно...");
    setCurrentImg(img);
  };

  const handleCloseModal = () => {
    console.log("Закриваємо модальне вікно...");
    setCurrentImg(null);
  };

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }

    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImges(searchTerm, page);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
        if (data.total_pages && data.total_pages !== totalPages) {
          setTotalPages(data.total_pages);
        }
      } catch (error) {
        setImages([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [page, searchTerm]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} page={page} onClick={handleOpenModal} />
      )}
      <Loader loading={loading} />
      {images.length > 0 && !loading && page !== totalPages && (
        <LoadMoreBtn onClick={handlecLoadMore} page={page} />
      )}
      {currentImg && <ImageModal img={currentImg} onClose={handleCloseModal} />}
    </>
  );
}
