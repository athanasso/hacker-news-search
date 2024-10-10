import React from 'react';
import StoryItem from './StoryItem';

const SearchResults = ({ stories, loading }) => {
    if (loading) return <div>Loading...</div>;
    if (!stories.length) return <div>No results found.</div>;

    return (
        <div>
            {stories.map((story, index) => (
                <StoryItem key={index} story={story} />
            ))}
        </div>
    );
};

export default SearchResults;
