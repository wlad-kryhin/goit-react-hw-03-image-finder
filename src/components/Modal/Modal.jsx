export default function Modal({ imageId, onClose, find }) {
  return (
    <div className="Overlay" onClose={onClose}>
      <div className="Modal" imageId={imageId}>
        <img src={find.largeImageURL} alt="" />
      </div>
    </div>
  );
}
