import React from 'react';
import {render, screen} from '@testing-library/react';
import SingInMessage from './sing-in-message';

it(`SingInMessage should render correctly`, () => {
  const fakeMessage = `fake message`;
  render(
      <SingInMessage message={fakeMessage}/>
  );

  expect(screen.getByText(/fake message/i)).toBeInTheDocument();
});
