import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchDropdown from './SearchDropdown';

describe('SearchDropdown Component', () => {
    const mockStories = [
        { title: 'Story 1', author: 'Author 1', num_comments: 10, points: 100 },
        { title: 'Story 2', author: 'Author 2', num_comments: 20, points: 200 },
    ];

    it('renders loading state', () => {
        render(<SearchDropdown stories={[]} loading={true} onStoryClick={() => {}} searchTerm="" />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders "No results found." when there are no stories', () => {
        render(<SearchDropdown stories={[]} loading={false} onStoryClick={() => {}} searchTerm="" />);
        expect(screen.getByText('No results found.')).toBeInTheDocument();
    });

    it('renders stories when provided', () => {
        render(<SearchDropdown stories={mockStories} loading={false} onStoryClick={() => {}} searchTerm="" />);
        expect(screen.getByText('Story 1')).toBeInTheDocument();
        expect(screen.getByText('Story 2')).toBeInTheDocument();
    });
});