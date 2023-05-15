import React from 'react';
import {fetchPhotos} from 'Api/Api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { StyledApp } from './App.styled';

export class App extends React.Component {
  state = {
    request: '',
    photos: [],
  };

  handleSubmit = (request) => {
    if (request !== '') {
      this.setState({ request})
    } else {
      console.log('напиши запит')
    }
  };

  componentDidUpdate(_, prevState) {
    const { request } = this.state;

    if (prevState.request !== request) {

      fetchPhotos(request).then(data => {
        if (data.hits.length === 0) {
          console.log('oops');
          return
        }
        return this.setState(({ photos }) => {
          return {photos: [...photos, ...data.hits]}
        })
      })

      this.setState({photos: []})
    }
  }

  render() {
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery data={this.state.photos}/>
      </StyledApp>
    );
  }
}
