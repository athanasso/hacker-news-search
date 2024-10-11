import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SavedStories from './SavedStories';

describe('SavedStories Component', () => {
    it('renders saved stories correctly', () => {
        const mockStories = [
        { title: 'Story 1' },
        { title: 'Story 2' },
        { title: 'Story 3' },
        ];
        render(<SavedStories stories={mockStories} onDelete={() => {}} />);
        expect(screen.getByText('Story 1')).toBeInTheDocument();
        expect(screen.getByText('Story 2')).toBeInTheDocument();
        expect(screen.getByText('Story 3')).toBeInTheDocument();
    });

    it('calls onDelete when delete button is clicked', () => {
        const mockDelete = jest.fn();
        const mockStories = [{ title: 'Test Story' }];
        render(<SavedStories stories={mockStories} onDelete={mockDelete} />);
        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);
        expect(mockDelete).toHaveBeenCalledWith(mockStories[0]);
    });

    it('displays "No stories saved." when there are no stories', () => {
        render(<SavedStories stories={[]} onDelete={() => {}} />);
        expect(screen.getByText('No stories saved.')).toBeInTheDocument();
    });
});