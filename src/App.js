import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    imageName: '',
  };
  handleForm = image => {
    this.setState({ imageName: image });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleForm} />
        <ImageGallery imageName={this.state.imageName} />
      </div>
    );
  }
}

export default App;
