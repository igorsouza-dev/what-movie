import React from 'react';
import { cleanup } from '@testing-library/react';
import FavoritesBtn from 'components/FavoritesBtn';
import { renderWithRedux } from '../utils/redux';

describe('<FavoritesBtn />', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container, getByTestId } = renderWithRedux(
      <FavoritesBtn />
    );

    const linkElement = getByTestId(/favorites-btn/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render correctly', () => {
    const { getByTestId } = renderWithRedux(
      <FavoritesBtn />,
      {
        initialState: {
          favorites: {
            1234: { id: 1234, original_title: 'Test 1' },
            1235: { id: 1235, original_title: 'Test 2' },
          },
        },
      }
    );

    expect(getByTestId(/count-value/i)).toHaveTextContent('2');
  });
});
