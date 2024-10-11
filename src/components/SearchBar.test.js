import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
    it('renders an input field', () => {
        render(<SearchBar query="" setQuery={() => {}} />);
        expect(screen.getByPlaceholderText('Search stories...')).toBeInTheDocument();
    });

    it('calls setQuery when input changes', () => {
        const mockSetQuery = jest.fn();
        render(<SearchBar query="" setQuery={mockSetQuery} />);
        const input = screen.getByPlaceholderText('Search stories...');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(mockSetQuery).toHaveBeenCalledWith('test');
    });
});