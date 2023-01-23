import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  it('should render the correct title', () => {
    const { getByText } = render(<App />);
    expect(getByText('Movies')).toBeInTheDocument();
  });
  it('should handle the input change', () => {
    const { getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText('Enter movie title');
    fireEvent.change(input, { target: { value: 'Superman' } });
    expect(input.value).toBe('Superman');
  });
  it('should handle the form submission', () => {
    const { getByText } = render(<App />);
    const submitBtn = getByText('Search');
    fireEvent.click(submitBtn);
  });
  it('should toggle dark mode', () => {
    const { getByLabelText } = render(<App />);
    const toggleBtn = getByLabelText('Toggle Dark Mode');
    fireEvent.click(toggleBtn);
    expect(toggleBtn.checked).toBe(true);
  });
});