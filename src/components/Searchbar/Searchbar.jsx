import React from 'react';
import { StyledForm, StyledFormBtn, StyledSpan, StyledInput, StyledHeader } from './Searchbar.styled';

class Searchbar extends React.Component {
  state = {
    request: '',
    photos: [],
    };

    handlChangeForm = event => {
        const { value } = event.currentTarget;

        this.setState({request: value})
    }
    
    handlSubmitForm = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.request)

        this.setState({ request: '' });
    }

  render() {
    return (
      <StyledHeader className="searchbar">
        <StyledForm className="form" onSubmit={this.handlSubmitForm}>
          <StyledFormBtn type="submit" className="button">
            <StyledSpan className="button-label">Search</StyledSpan>
          </StyledFormBtn>
          <StyledInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.request}
            onChange={this.handlChangeForm}
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}

export default Searchbar;
