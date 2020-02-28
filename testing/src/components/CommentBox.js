import React, { useState } from 'react';

export default () => {
  const [comment, setCommentState] = useState('');

  const handleChange = (event) => {
    setCommentState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCommentState('');
    console.log('submited');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add comment</h4>
      <textarea value={comment} onChange={handleChange} placeholder="Enter your comment here"/>
      <div>
        <button type="submit">Submit comment</button>
      </div>
    </form>
  );
};
