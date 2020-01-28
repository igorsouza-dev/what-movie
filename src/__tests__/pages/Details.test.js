import React from 'react';
import { cleanup, wait } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Details from 'pages/Details';

import apiMock from 'services/api';

import { renderWithRedux } from '../utils/redux';

jest.mock('services/api');

describe('<Details />', () => {
  let movie = {};
  beforeEach(() => {
    movie = {
      adult: false,
      backdrop_path: '/z2QUexmccqrvw1kDMw3R8TxAh5E.jpg',
      belongs_to_collection: null,
      budget: 0,
      genres: [{ id: 18, name: 'Drama' }, { id: 80, name: 'Crime' }, { id: 35, name: 'Comedy' }],
      homepage: null,
      id: 2,
      imdb_id: 'tt0094675',
      original_language: 'fi',
      original_title: 'Ariel',
      overview: "Taisto Kasurinen is a Finnish coal miner whose father has just committed suicide and who is framed for a crime he did not commit. In jail, he starts to dream about leaving the country and starting a new life. He escapes from prison but things don't go as planned...",
      popularity: 9.225,
      poster_path: '/gZCJZOn4l0Zj5hAxsMbxoS6CL0u.jpg',
      production_companies: [{
        id: 2303, logo_path: null, name: 'Villealfa Filmproductions', origin_country: 'FI'
      }],
      production_countries: [{ iso_3166_1: 'FI', name: 'Finland' }],
      release_date: '1988-10-21',
      revenue: 0,
      runtime: 73,
      spoken_languages: [{ iso_639_1: 'de', name: 'Deutsch' }, { iso_639_1: 'fi', name: 'suomi' }],
      status: 'Released',
      tagline: '',
      title: 'Ariel',
      video: false,
      vote_average: 7.0,
      vote_count: 90,
      videos: { results: [] }
    };
  });
  afterEach(cleanup);

  it('should render', async () => {
    const id = 2;

    apiMock.get.mockResolvedValueOnce({
      data: movie
    });
    const history = createMemoryHistory();
    history.push(`/details/${id}`);
    const { container, getByText } = renderWithRedux(
      <MemoryRouter initialEntries={[`/details/${id}`]} initialIndex={0}>
        <Route path="/details/:id">
          <Details />
        </Route>
      </MemoryRouter>
    );
    expect(apiMock.get).toBeCalledWith(`/movie/${id}?append_to_response=videos`);


    await wait(() => getByText(/Overview/i));

    expect(getByText('Ariel (1988)')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the videos section when videos are provided', async () => {
    const { id } = movie;
    movie.videos.results = [
      { key: 'ayoutubekey', site: 'YouTube' }
    ];

    apiMock.get.mockResolvedValueOnce({
      data: movie
    });
    const history = createMemoryHistory();
    history.push(`/details/${id}`);
    const { container, getByText, queryByText } = renderWithRedux(
      <MemoryRouter initialEntries={[`/details/${id}`]} initialIndex={0}>
        <Route path="/details/:id">
          <Details />
        </Route>
      </MemoryRouter>
    );


    await wait(() => getByText(/Trailers/i));

    expect(queryByText(/No video found./i)).toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });
});
