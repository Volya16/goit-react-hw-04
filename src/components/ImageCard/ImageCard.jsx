import style from "./ImageCard.module.css";

export default function ImageCard({ src, alt }) {
  return (
    <>
      <div className={style.wrapper}>
        <img className={style.image} src={src} alt={alt} />
      </div>
    </>
  );
}
