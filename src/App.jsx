import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchDropdown from './components/SearchDropdown';
import useSearchStories from './hooks/useSearchStories';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const { stories, loading } = useSearchStories(query);

  return (
    <div>
      <h1>Hacker News Search</h1>
      <SearchBar query={query} setQuery={setQuery} />
      {/* Show the dropdown if there are 3+ characters typed */}
      {query.length >= 3 && <SearchDropdown stories={stories} loading={loading} />}
    </div>
  );
};

export default App;
