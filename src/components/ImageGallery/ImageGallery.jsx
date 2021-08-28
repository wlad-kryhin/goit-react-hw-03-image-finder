import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} openModal={openModal} />
    </ul>
  );
}
