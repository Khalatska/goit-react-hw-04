import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  const hasImages = Array.isArray(images) && images.length > 0;
  return (
    <div>
      <ul>
        {hasImages &&
          images.map((image) => (
            <li key={image.id}>
              <ImageCard images={image} openModal={openModal} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
