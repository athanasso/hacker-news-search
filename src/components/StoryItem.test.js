import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StoryItem from './StoryItem';

describe('StoryItem Component', () => {
    const mockStory = {
        title: 'Test Story',
        author: 'Test Author',
        num_comments: 10,
        points: 100,
    };

    it('renders story details correctly', () => {
        render(<StoryItem story={mockStory} searchTerm="" onClick={() => {}} />);
        expect(screen.getByText('Test Story')).toBeInTheDocument();
        expect(screen.getByText('By: Test Author')).toBeInTheDocument();
        expect(screen.getByText('Comments: 10 | Points: 100')).toBeInTheDocument();
    });

    it('highlights search term in title', () => {
        render(<StoryItem story={mockStory} searchTerm="Test" onClick={() => {}} />);
        const highlightedText = screen.getByText('Test');
        expect(highlightedText).toHaveClass('highlight');
    });

    it('calls onClick when clicked', () => {
        const mockOnClick = jest.fn();
        render(<StoryItem story={mockStory} searchTerm="" onClick={mockOnClick} />);
        const storyItem = screen.getByText('Test Story');
        fireEvent.click(storyItem);
        expect(mockOnClick).toHaveBeenCalledWith(mockStory);
    });
});