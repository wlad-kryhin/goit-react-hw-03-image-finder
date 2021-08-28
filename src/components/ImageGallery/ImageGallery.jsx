import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';
const KEY = '22313175-89def84c9551dc3c20db3bc15';
export default class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName === this.props.imageName) {
      return;
    }
    this.setState({ status: 'pending' });
    this.searchImages();
  }
  searchImages = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.props.imageName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(
          new Error(`нету такой дичи с именем ${this.props.imageName}`),
        );
      })
      .then(data =>{
        return this.setState(prevState => ({ 
            images: [...prevState.images, ...data.hits],
            status: 'resolved'
          })),
        })
      .catch(error => this.setState({ status: 'reject' }));
  };
  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { images, status } = this.state;
    if (status === 'idle') {
      return <p>Search smth</p>;
    }

    if (status === 'pending') {
      return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
    }

    if (status === 'reject') {
      return <p>lol</p>;
    }

    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          <ImageGalleryItem images={images} />
          <Button onClick={this.loadMore} />
        </ul>
      );
    }
  }
}
