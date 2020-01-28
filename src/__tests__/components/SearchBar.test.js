import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import SearchBar from 'components/SearchBar';

describe('<SearchBar />', () => {
  afterEach(cleanup);
  it('should render', () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render(
      <Router history={history}>
        <SearchBar />
      </Router>
    );
    const linkElement = getByTestId(/search-bar/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
