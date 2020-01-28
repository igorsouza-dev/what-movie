import React from 'react';
import { cleanup, wait } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Search from 'pages/Search';
import apiMock from 'services/api';
import searchResults from '../utils/searchResults';

import { renderWithRedux } from '../utils/redux';

jest.mock('services/api');

describe('<Search />', () => {
  afterEach(cleanup);

  it('should render', async () => {
    const id = 2;

    apiMock.get.mockResolvedValueOnce({
      data: searchResults
    });
    const history = createMemoryHistory();
    history.push(`/details/${id}`);
    const { container, getByText, getAllByTestId } = renderWithRedux(
      <MemoryRouter initialEntries={['/search?q=thor']} initialIndex={0}>
        <Route path="/search">
          <Search />
        </Route>
      </MemoryRouter>
    );


    await wait(() => getByText(/Page/i));

    expect(getByText(/Thor: Ragnarok/)).toBeInTheDocument();
    expect(getAllByTestId('name-container')).toHaveLength(20);
    expect(getByText(/148 movies/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
