export default function ImageGalleryItem({ images }) {
  return images.map(({ id, webformatURL, tags }) => {
    return (
      <li className="ImageGalleryItem" key={id}>
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </li>
    );
  });
}
