import React from 'react';
import { cleanup, waitForElement } from '@testing-library/react';
import App from 'App';
import apiMock from 'services/api';
import { getYear, startOfWeek, endOfWeek } from 'date-fns';

import { renderWithRedux } from './utils/redux';

jest.mock('services/api');

function getDateOnly(date) {
  return date.toISOString().substring(0, 10);
}
const today = new Date();
const year = getYear(today);
const lastYear = year - 1;
const start = getDateOnly(startOfWeek(today));
const end = getDateOnly(endOfWeek(today));
const urls = [
  `/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}&sort_by=vote_average.desc`,
  `/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&vote_count.gte=200`,
  `/discover/movie?primary_release_year=${lastYear}&sort_by=vote_average.desc&vote_count.gte=1000`,
];


describe('<App />', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container, getByText } = renderWithRedux(<App />);
    const linkElement = getByText(/What movie?/i);

    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render correctly', async () => {
    apiMock.get.mockResolvedValue({
      data: {
        results: [
          {
            id: 1,
            original_title: 'Movie name test 1',
            average_vote: 10,
            poster_path: '1.jpg',
          },
          {
            id: 2,
            original_title: 'Movie name test 2',
            average_vote: 10,
            poster_path: '2.jpg',
          },
          {
            id: 3,
            original_title: 'Movie name test 3',
            average_vote: 10,
            poster_path: '3.jpg',
          },
        ],
      },
    });

    const {
      container, getAllByText, getAllByTestId
    } = renderWithRedux(<App />);


    expect(getAllByText('Loading...')).toHaveLength(3);
    await waitForElement(() => getAllByTestId(/poster-img-container/i));
    // expect(apiMock.get).toHaveBeenCalledTimes(3);
    expect(apiMock.get).toHaveBeenCalledWith(urls[0]);
    expect(apiMock.get).toHaveBeenCalledWith(urls[1]);
    expect(apiMock.get).toHaveBeenCalledWith(urls[2]);
    expect(getAllByText('Movie name test 1')).toHaveLength(3);
    expect(getAllByText('Movie name test 2')).toHaveLength(3);
    expect(getAllByText('Movie name test 3')).toHaveLength(3);

    expect(container.firstChild).toMatchSnapshot();
  });
});
