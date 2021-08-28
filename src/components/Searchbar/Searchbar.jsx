import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    image: '',
  };
  handleInputChange = e => {
    this.setState({ image: e.currentTarget.value.toLowerCase() });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.image.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.image);
    e.currentTarget.reset();
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleFormSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.image}
            onChange={this.handleInputChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
