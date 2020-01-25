import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SearchBar from 'components/SearchBar';

describe('<SearchBar />', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container, getByTestId } = render(<SearchBar />);
    const linkElement = getByTestId(/search-bar/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
