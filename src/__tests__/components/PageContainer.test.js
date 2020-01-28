import React from 'react';
import { cleanup } from '@testing-library/react';
import PageContainer from 'components/PageContainer';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { renderWithRedux } from '../utils/redux';

describe('<PageContainer />', () => {
  afterEach(cleanup);
  it('should render', () => {
    const history = createMemoryHistory();
    const { container } = renderWithRedux(
      <Router history={history}>
        <PageContainer>
          <span>Some content</span>
        </PageContainer>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render some content inside the container', () => {
    const history = createMemoryHistory();
    const { getByText } = renderWithRedux(
      <Router history={history}>
        <PageContainer>
          <span>Some content</span>
        </PageContainer>
      </Router>
    );
    expect(getByText(/some content/i)).toBeInTheDocument();
  });
  it('should show the movie list drawer with favorites', () => {
    const history = createMemoryHistory();
    const { getByText } = renderWithRedux(
      <Router history={history}>
        <PageContainer>
          <span>Testing side drawer</span>
        </PageContainer>
      </Router>,
      {
        initialState: {
          favorites: {
            1234: { id: 1234, original_title: 'Movie 1' },
            1235: { id: 1235, original_title: 'Movie 2' },
          },
          watchLater: {},
          showList: 'favorites',
        },
      }
    );
    expect(getByText(/Movie 1/i)).toBeInTheDocument();
    expect(getByText(/Movie 2/i)).toBeInTheDocument();
  });
  it('should show the movie list drawer with watch later', () => {
    const history = createMemoryHistory();
    const { getByText } = renderWithRedux(
      <Router history={history}>
        <PageContainer>
          <span>Testing side drawer</span>
        </PageContainer>
      </Router>,
      {
        initialState: {
          watchLater: {
            1234: { id: 1234, original_title: 'Movie 1' },
            1235: { id: 1235, original_title: 'Movie 2' },
          },
          favorites: {},
          showList: 'watchLater',
        },
      }
    );
    expect(getByText(/Movie 1/i)).toBeInTheDocument();
    expect(getByText(/Movie 2/i)).toBeInTheDocument();
  });
});
