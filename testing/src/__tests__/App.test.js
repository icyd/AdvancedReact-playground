import React from 'react';
import App from 'components/App';
import { render } from '@testing-library/react';

describe('Check if components are rendered', () => {
  it('show comment box', ()=> {
    const { queryByText } = render(<App />);
    expect(queryByText(/Add comment/)).not.toBeNull();
  });

  it('show comment list', ()=> {
    const { queryByText } = render(<App />);
    expect(queryByText(/Comment List/)).not.toBeNull();
  });
});
