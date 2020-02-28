import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import CommentBox from 'components/CommentBox';

describe('Test of CommentBox', () => {
  it('Check if button is rendered', () => {
    const { queryByText } = render(<CommentBox />);
    expect(queryByText(/Submit comment/)).not.toBeNull();
  });

  it('Check if textarea rendered', () => {
    const { queryByPlaceholderText } = render(<CommentBox />);
    expect(queryByPlaceholderText('Enter your comment here')).not.toBeNull();

  })

  it('Check submition of form', async () => {
    const { container } = render(<CommentBox />);
    const handleSubmit = jest.fn();
    const textarea = container.querySelector('textarea');
    const button = container.querySelector('button[type=submit]');
    await wait(() => {
      fireEvent.change(textarea, {
        target: {
          value: 'TEST',
        },
      });
    });
    expect(textarea.innerHTML).toBe('TEST');
    await wait(() => {
      fireEvent.click(button);
    });
    expect(handleSubmit).toHaveBeenCalled();
    expect(textarea.innerHTML).toBe('');
  });
});
