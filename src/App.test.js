import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import useSearchStories from './hooks/useSearchStories';

jest.mock('./hooks/useSearchStories');

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useSearchStories.mockReturnValue({ stories: [], loading: false });
    localStorageMock.getItem.mockReturnValue(null);
  });

  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Hacker News Search')).toBeInTheDocument();
  });

  it('loads saved stories from localStorage on mount', () => {
    const mockStories = [{ title: 'Test Story' }];
    localStorageMock.getItem.mockReturnValue(JSON.stringify(mockStories));
    render(<App />);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('savedStories');
  });

  it('displays search results and allows saving a story', async () => {
    const mockStories = [{ title: 'New Story', author: 'Test Author', num_comments: 10, points: 100 }];
    useSearchStories.mockReturnValue({ stories: mockStories, loading: false });

    render(<App />);

    // Simulate a search
    const searchInput = screen.getByPlaceholderText('Search stories...');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    // Wait for the search results to appear
    await waitFor(() => {
      expect(screen.getByText('New Story')).toBeInTheDocument();
    });

    // Find and click the story item to save it
    const storyItem = screen.getByText('New Story');
    fireEvent.click(storyItem);

    // Check if localStorage.setItem was called with the correct arguments
    expect(localStorageMock.setItem).toHaveBeenCalledWith('savedStories', JSON.stringify(mockStories));
  });

  it('deletes a saved story', () => {
    const mockStories = [{ title: 'Test Story' }];
    localStorageMock.getItem.mockReturnValue(JSON.stringify(mockStories));

    render(<App />);

    // Find and click the delete button
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    // Check if localStorage.setItem was called with an empty array
    expect(localStorageMock.setItem).toHaveBeenCalledWith('savedStories', JSON.stringify([]));
  });
});