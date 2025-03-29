import toast, { Toaster } from "react-hot-toast";

import style from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target;
    const quary = e.target.elements.input.value.trim();

    if (quary === "") {
      toast("Please enter search term!");
      return;
    }

    onSubmit(quary);
    input.reset();
  };

  return (
    <>
      <header>
        <form className={style.searchForm} onSubmit={handleSearch}>
          <input
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={style.searchInput}
          />
          <button type="submit" className={style.searchButton}>
            Search
          </button>
        </form>
      </header>
      <Toaster />
    </>
  );
}
