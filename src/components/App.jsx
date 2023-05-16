import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchPhotos } from 'Api/Api';
import Searchbar from './Searchbar/Searchbar';
import LoadMoreBtn from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { StyledApp } from './App.styled';

export class App extends React.Component {
  state = {
    request: '',
    photos: [],
    page: 1,
    isLoader: false,
    error: null,
  };

  handleSubmit = request => {
    if (request !== '') {
      this.setState({ request });
    } else {
      Notify.info('I`m waiting for your request');
    }

    if (this.state.request !== request) {
      this.setState({ photos: [] });
    }
  };

  handleLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(_, prevState) {
    const { request, page } = this.state;

    if (prevState.request !== request || prevState.page !== page) {
      this.setState({ isLoader: true });

      fetchPhotos(request, page)
        .then(data => {
          if (data.hits.length === 0) {
            Notify.failure(
              'Sorry, there are no images matching your search query. Please try again.'
            );

            return;
          }
          return this.setState(({ photos }) => {
            return { photos: [...photos, ...data.hits] };
          });
        })
        .catch(error => this.setState({ error: error.massage }))
        .finally(() => {
          this.setState({ isLoader: false });
        });
    }
  }

  render() {
    const { photos, isLoader, error } = this.state;

    return (
      <StyledApp>
        {error &&
          Notify.failure('Something went wrong, please try again later')}
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery data={this.state.photos} />
        {photos.length > 0 && (
          <LoadMoreBtn onClick={this.handleLoadMoreClick} />
        )}
        {isLoader && <Loader />}
      </StyledApp>
    );
  }
}
