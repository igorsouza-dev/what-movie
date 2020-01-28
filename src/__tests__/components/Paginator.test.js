import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';

import Paginator from 'components/Paginator';


describe('<Paginator />', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container, getByText, getByTestId } = render(
      <Paginator
        previousPage={() => { }}
        nextPage={() => { }}
      />
    );
    expect(getByText(/Page/i)).toBeInTheDocument();
    expect(getByTestId(/prev-button/i)).toBeInTheDocument();
    expect(getByTestId(/next-button/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should fire events when clicking the buttons', () => {
    let page = 10;
    function nextPage() {
      page += 1;
    }
    function previousPage() {
      page -= 1;
    }
    const { getByTestId } = render(
      <Paginator
        previousPage={previousPage}
        nextPage={nextPage}
      />
    );
    fireEvent.click(getByTestId('next-button'));
    expect(page).toStrictEqual(11);
    fireEvent.click(getByTestId('prev-button'));
    expect(page).toStrictEqual(10);
  });
});
