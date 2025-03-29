import ImageCard from "../ImageCard/ImageCard";
import LoadMoreBtn from "../LoaderMoreBtn/LoaderMoreBtn";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ images, page, onClick }) {
  return (
    <>
      <ul className={style.list}>
        {images.map((img) => (
          <li className={style.item} key={img.id}>
            <ImageCard src={img.urls.small} alt={img.alt_description} />
          </li>
        ))}
      </ul>
      {images.length > 0 && <LoadMoreBtn onClick={onClick} page={page} />}
      {/* <button onClick={onClick} type="submit">
        Load more {page}
      </button> */}
    </>
  );
}
