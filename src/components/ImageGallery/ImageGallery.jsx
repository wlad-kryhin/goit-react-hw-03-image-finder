import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
const KEY = '22313175-89def84c9551dc3c20db3bc15';
export default class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName === this.props.imageName) {
      return;
    }
    const responseUrl = await fetch(
      `https://pixabay.com/api/?q=${this.props.imageName}&page=${this.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    const { hits } = await responseUrl.json();
    this.setState({ images: hits });
  }

  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem images={this.state.images} />
      </ul>
    );
  }
}
