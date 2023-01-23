import React from 'react';
import { render } from '@testing-library/react';
import Movie from '../Movie';

describe('Movie', () => {
  it('should render the correct title', () => {
    const movie = { Title: 'The Shawshank Redemption', Poster: '', Type: 'movie', Year: '1994' };
    const { getByText } = render(<Movie movie={movie} />);
    expect(getByText('The Shawshank Redemption')).toBeInTheDocument();
  });
  it('should render the correct year', () => {
    const movie = { Title: 'The Shawshank Redemption', Poster: '', Type: 'movie', Year: '1994' };
    const { getByText } = render(<Movie movie={movie} />);
    expect(getByText('1994')).toBeInTheDocument();
  });
});