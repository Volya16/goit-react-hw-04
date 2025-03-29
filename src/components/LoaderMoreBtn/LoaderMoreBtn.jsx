import style from "./LoaderMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <>
      <button type="submit" className={style.loadMoreButton} onClick={onClick}>
        Load more
      </button>
    </>
  );
}
