import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import {
  cleanup, render, waitForElement, waitForElementToBeRemoved
} from '@testing-library/react';
import apiMock from 'services/api';
import PostersSection from 'components/PostersSection';

jest.mock('services/api');


describe('<PostersSection />', () => {
  afterEach(cleanup);
  const title = 'Test section';
  const query = 'http://test.url.com';

  it('should render', async () => {
    const history = createMemoryHistory();
    apiMock.get.mockResolvedValueOnce(
      {
        data: {
          results: [
            {
              id: 1234,
              original_title: 'Movie name test',
              poster_path: '123456.jpg',
              average_vote: 10
            },
          ],
        }
      }
    );
    const { container, getByText, getByTestId } = render(
      <Router history={history}>
        <PostersSection title={title} query={query} />
      </Router>
    );

    expect(getByText(title)).toBeInTheDocument();

    expect(apiMock.get).toHaveBeenCalledWith(query);

    expect(getByText('Loading...')).toBeInTheDocument();

    await waitForElement(() => getByTestId(/poster-img-container/i));

    expect(getByText('Movie name test')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render a message of empty results', async () => {
    const history = createMemoryHistory();
    apiMock.get.mockResolvedValueOnce(
      {
        data: {
          results: [

          ],
        }
      }
    );
    const { container, getByText } = render(
      <Router history={history}>
        <PostersSection title={title} query={query} />
      </Router>
    );

    expect(getByText(title)).toBeInTheDocument();

    expect(apiMock.get).toHaveBeenCalledWith(query);

    expect(getByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => getByText('Loading...'));

    expect(getByText('No movies found')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
