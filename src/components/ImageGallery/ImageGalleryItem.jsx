export default function ImageGalleryItem({ images, openModal }) {
  return images.map(({ id, webformatURL, tags }) => {
    return (
      <li className="ImageGalleryItem" onClick={openModal} key={id}>
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </li>
    );
  });
}
