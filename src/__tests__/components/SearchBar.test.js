import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SearchBar from 'components/SearchBar';
import reducer, { INITIAL_STATE } from 'store/reducers';

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, INITIAL_STATE) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),

    store,
  };
}


describe('<SearchBar />', () => {
  afterEach(cleanup);
  it('should render', () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = renderWithRedux(
      <Router history={history}>
        <SearchBar />
      </Router>,
    );
    const linkElement = getByTestId(/search-bar/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
