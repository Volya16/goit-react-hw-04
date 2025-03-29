// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import { useEffect, useState } from "react";

import fetchImges from "../../api/apiServise";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (value) => {
    setSearchTerm(value);
    setPage(1);
    setImages([]);
  };

  const handlecLoadMore = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }

    async function getData() {
      try {
        const data = await fetchImges(searchTerm, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        // setError(true);
      } finally {
      }
    }
    getData();
  }, [page, searchTerm]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} page={page} onClick={handlecLoadMore} />
      )}
      <Loader loading={loading} />
      {error && <ErrorMessage error={error} />}
    </>
  );
}

// try {
//   setError(false);
//   setLoading(true);
//   const data = await fetchImges(value);
//   setImages(data);
// } catch {
//   setImages([]);
//   setError(true);
// } finally {
//   setLoading(false);
// }
