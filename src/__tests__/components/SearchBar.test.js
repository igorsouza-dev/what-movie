import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
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
  it('should navigate to the details page when clicked', () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render(
      <Router history={history}>
        <SearchBar />
      </Router>
    );
    fireEvent.change(container.querySelector('input[type=text]'), { target: { value: 'test' } });
    fireEvent.click(getByTestId('search-bar').querySelector('button'));
    const expectedUrl = `${history.location.pathname}${history.location.search}`;
    expect(expectedUrl).toEqual('/search?q=test');
  });
});
