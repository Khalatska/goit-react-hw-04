const ImageCard = ({ images, openModal }) => {
  return (
    <div>
      <img
        src={images.urls.small}
        alt={images.alt_description}
        onClick={() => openModal(images)}
      />
      <p>
        <b>Likes: </b>
        {images.likes}
      </p>
    </div>
  );
};

export default ImageCard;
