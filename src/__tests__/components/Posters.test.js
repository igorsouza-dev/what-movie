import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Posters from 'components/Posters';

import { renderWithRedux } from '../utils/redux';

describe('<Posters />', () => {
  afterEach(cleanup);
  const movies = [
    { id: 1, url: 'http://test.url.com/1', original_title: 'Test movie 1' },
    { id: 2, url: 'http://test.url.com/2', original_title: 'Test movie 2' },
    { id: 3, url: 'http://test.url.com/3', original_title: 'Test movie 3' },
  ];
  const history = createMemoryHistory();
  it('should render', () => {
    const { container, getByText } = render(
      <Router history={history}>
        <Posters movies={movies} />
      </Router>
    );
    expect(getByText('Test movie 1')).toBeInTheDocument();
    expect(getByText('Test movie 2')).toBeInTheDocument();
    expect(getByText('Test movie 3')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should change display when passing prop', () => {
    const { container, getByText } = render(
      <Router history={history}>
        <Posters movies={movies} type="grid" />
      </Router>
    );
    expect(getByText('Test movie 1')).toBeInTheDocument();
    expect(getByText('Test movie 2')).toBeInTheDocument();
    expect(getByText('Test movie 3')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
