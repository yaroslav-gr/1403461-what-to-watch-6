import React from 'react';
import {render} from '@testing-library/react';
import SingInMessage from './sing-in-message';

it(`SingInMessage should render correctly`, () => {
  const fakeMessage = `fake message`;
  const {getByText} = render(
      <SingInMessage message={fakeMessage}/>
  );

  const paragrafElement = getByText(`fake message`);

  expect(paragrafElement).toBeInTheDocument();
});
