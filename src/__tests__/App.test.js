import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from 'store/reducers';
import App from 'App';
import apiMock from 'services/api';
import { getYear, startOfWeek, endOfWeek } from 'date-fns';

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

function renderWithRedux(
  ui,
  { initialState, mockStore = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={mockStore}>{ui}</Provider>),

    mockStore,
  };
}

describe('<App />', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container, getByText } = renderWithRedux(<App />);
    const linkElement = getByText(/What movie?/i);

    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render correctly', () => {
    const { getAllByText } = renderWithRedux(<App />);
    apiMock.get.mockResolvedValueOnce({
      data: {
        results: [
          {
            id: '1234',
            original_title: 'Movie name test',
          },
        ],
      },
    });

    expect(getAllByText('Loading...')).toHaveLength(3);
    // expect(apiMock.get).toHaveBeenCalledTimes(3);
    expect(apiMock.get).toHaveBeenCalledWith(urls[0]);
    expect(apiMock.get).toHaveBeenCalledWith(urls[1]);
    expect(apiMock.get).toHaveBeenCalledWith(urls[2]);
  });
});
