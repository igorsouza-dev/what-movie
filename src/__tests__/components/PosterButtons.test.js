import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, cleanup, fireEvent } from '@testing-library/react';
import PosterButtons from 'components/PosterButtons';
import reducer from 'store/reducers';

function renderWithRedux(
  ui,
  { initialState, mockStore = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={mockStore}>{ui}</Provider>),
    mockStore,
  };
}


describe('<PosterButtons />', () => {
  afterEach(cleanup);
  const movie = {
    id: 1234,
  };
  it('should render', () => {
    const { container, getByText } = renderWithRedux(<PosterButtons movie={movie} />);

    expect(getByText(/Watch Later/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should change the watchLater redux state when clicking Watch Later', () => {
    const { getByText, mockStore } = renderWithRedux(<PosterButtons movie={movie} />);
    fireEvent.click(getByText(/Watch Later/i));
    let { watchLater } = mockStore.getState();
    expect(watchLater['1234']).toBeTruthy();
    fireEvent.click(getByText(/Watch Later/i));

    watchLater = mockStore.getState().watchLater;

    expect(watchLater['1234']).not.toBeTruthy();
  });
  it('should change the favorites redux state when clicking the favorites button', () => {
    const { getByTestId, mockStore } = renderWithRedux(<PosterButtons movie={movie} />);
    fireEvent.click(getByTestId(/favorite/i));
    let { favorites } = mockStore.getState();

    expect(favorites['1234']).toBeTruthy();
    fireEvent.click(getByTestId(/favorite/i));
    favorites = mockStore.getState().favorites;

    expect(favorites['1234']).not.toBeTruthy();
  });
});
