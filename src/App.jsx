import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchDropdown from './components/SearchDropdown';
import useSearchStories from './hooks/useSearchStories';
import SavedStories from './components/SavedStories';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const { stories, loading } = useSearchStories(query);
  const [savedStories, setSavedStories] = useState([]);

   // Fetch saved stories from local storage once
  useEffect(() => {
    const storedStories = localStorage.getItem('savedStories');
    if (storedStories) {
      setSavedStories(JSON.parse(storedStories));
    }
  }, []);

  // Function to add a story to saved list
  const saveStory = (story) => {
    if (!savedStories.some((saved) => saved.title === story.title)) {
      const updatedStories = [...savedStories, story];
      setSavedStories(updatedStories);
      localStorage.setItem('savedStories', JSON.stringify(updatedStories));
    }
  };

  // Function to remove a story from saved list
  const deleteStory = (storyToRemove) => {
    const updatedStories = savedStories.filter(story => story.title !== storyToRemove.title);
    setSavedStories(updatedStories);
    localStorage.setItem('savedStories', JSON.stringify(updatedStories));
  };

  return (
    <div>
      <div>
        <h1>Hacker News Search</h1>
        <SearchBar query={query} setQuery={setQuery} />
        {/* Show the dropdown if there are 3+ characters typed */}
        {query.length >= 3 && <SearchDropdown stories={stories} loading={loading} searchTerm={query} onStoryClick={saveStory}/>}
      </div>

      {/* Saved Stories Section */}
      <SavedStories stories={savedStories} onDelete={deleteStory} />
    </div>
  );
};

export default App;
