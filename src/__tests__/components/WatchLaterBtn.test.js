import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import WatchLaterBtn from 'components/WatchLaterBtn';

import { renderWithRedux } from '../utils/redux';

describe('<WatchLaterBtn />', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container, getByTestId } = renderWithRedux(
      <WatchLaterBtn />
    );

    const linkElement = getByTestId(/watch-later/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render correctly', () => {
    const { getByTestId } = renderWithRedux(
      <WatchLaterBtn />,
      {
        initialState: {
          watchLater: {
            1234: { id: 1234, original_title: 'Test 1' },
            1235: { id: 1235, original_title: 'Test 2' },
          },
        },
      }
    );

    expect(getByTestId(/count-value/i)).toHaveTextContent('2');
  });
  it('should change the showList state to favorites when clicked', () => {
    const { getByTestId, mockStore } = renderWithRedux(
      <WatchLaterBtn />
    );
    fireEvent.click(getByTestId(/watch-later/i));
    expect(mockStore.getState().showList).toBe('watchLater');

    fireEvent.click(getByTestId(/watch-later/i));
    expect(mockStore.getState().showList).not.toBe('watchLater');
  });
});
