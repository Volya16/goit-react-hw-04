import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
  return (
    <>
      <ul className={style.list}>
        {images.map((img) => (
          <li onClick={() => onClick(img)} className={style.item} key={img.id}>
            <ImageCard src={img.urls.small} alt={img.alt_description} />
          </li>
        ))}
      </ul>
    </>
  );
}
