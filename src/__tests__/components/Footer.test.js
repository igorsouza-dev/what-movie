import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from 'components/Footer';

describe('<Footer />', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container, getByText } = render(<Footer />);

    const linkElement = getByText(/Data provided by/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
