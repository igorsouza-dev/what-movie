import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'store/reducers';
import { render } from '@testing-library/react';

export function renderWithRedux(
  ui,
  { initialState, mockStore = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={mockStore}>{ui}</Provider>),
    mockStore,
  };
}
