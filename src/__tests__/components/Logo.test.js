import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Logo from 'components/Logo';

describe('<Logo />', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container, getByTestId } = render(<Logo />);

    const linkElement = getByTestId(/logo/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render correclty', () => {
    const { container, getByText } = render(<Logo />);

    const linkElement = getByText(/What Movie?/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
