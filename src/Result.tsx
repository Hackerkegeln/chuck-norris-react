import React from 'react';

interface Props {
  jokeText: string;
}

export const Result: React.FC<Props> = ({jokeText}) => <>
  <div role="status">
    {jokeText}
  </div>
  <div role="status" className="alert alert-danger">
    Something went wrong!!!!
  </div>
  <div role="status" className="spinner-border">
    <span className="sr-only">Loading...</span>
  </div>
</>;