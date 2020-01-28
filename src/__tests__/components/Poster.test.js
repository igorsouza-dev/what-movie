import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from 'store/reducers';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Poster from 'components/Poster';

function renderWithRedux(
  ui,
  { initialState, mockStore = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={mockStore}>{ui}</Provider>),

    mockStore,
  };
}

describe('<Poster />', () => {
  afterEach(cleanup);
  const movie = {
    id: 1234,
    original_title: 'Movie test name',
    url: 'https://test.url.com',
    vote_average: 10,
  };

  it('should render', () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <Poster movie={movie} />
      </Router>
    );

    const linkElement = getByText(/Movie test name/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render correclty when showing buttons', () => {
    const history = createMemoryHistory();
    const { container, getByText } = renderWithRedux(
      <Router history={history}>
        <Poster movie={movie} showButtons />
      </Router>
    );

    const linkElement = getByText(/Watch Later?/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should navigate to the details page when clicked', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <Poster movie={movie} />
      </Router>
    );
    fireEvent.click(getByTestId('poster-img-container'));
    expect(history.location.pathname).toEqual('/details/1234');
  });
  it('should render a No Poster container when there is no url', () => {
    const history = createMemoryHistory();
    const newMovie = { ...movie };
    newMovie.url = null;
    const { getByTestId } = render(
      <Router history={history}>
        <Poster movie={newMovie} />
      </Router>
    );
    expect(getByTestId('no-poster-container')).toBeInTheDocument();
  });
});
