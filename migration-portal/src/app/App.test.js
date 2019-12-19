import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";

describe('<App />', () => {
  it('should render the header', () => {
    const {getByTestId} = render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );
    expect(getByTestId("header")).toBeTruthy();
  });
});
