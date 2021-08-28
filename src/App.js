import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal/Modal';
const KEY = '22313175-89def84c9551dc3c20db3bc15';

class App extends Component {
  state = {
    imageName: '',
    images: [],
    page: 1,
    isLoading: false,
    error: '',
    bigImg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.setState({ images: [] });
      this.searchImages();
    }
    if (prevState.page !== this.state.page) {
      this.searchImages();
    }
  }

  searchImages = () => {
    const { imageName, page } = this.state;
    this.setState({ isLoading: true });
    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?q=${imageName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`нету такой дичи с именем ${imageName}`),
          );
        })
        .then(data => data.hits)
        .then(images => {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }, 1000);
  };

  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  handleForm = image => {
    this.setState({ imageName: image });
  };

  findBigImage = e => {
    const bigImage = this.state.images.find(el => el.id === this.state.bigImg);
    return bigImage;
  };
  openModal = evt => {
    this.setState({
      isOpen: true,
      bigImg: Number(evt.currentTarget.id),
    });
  };

  closeModal = () => this.setState({ isOpen: false });

  render() {
    const { images, isLoading, isOpen, bigImg } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleForm} />
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {images.length > 0 ? (
          <ImageGallery images={images} openModal={this.openModal} />
        ) : (
          <h2 className="title-bar">
            Please, enter something in the search bar
          </h2>
        )}
        {images.length > 10 && <Button onClick={this.loadMore} />}
        {isOpen && (
          <Modal
            imageId={bigImg}
            onClose={this.closeModal}
            find={this.findBigImage}
          />
        )}
      </div>
    );
  }
}

export default App;
