import React from 'react';
import StoryItem from './StoryItem';

const SearchDropdown = ({ stories, loading }) => {
    if (loading) return <div className="dropdown">Loading...</div>;
    if (!stories.length) return <div className="dropdown">No results found.</div>;

    return (
        <div className="dropdown">
            {stories.map((story, index) => (
            <div key={index}>
                <StoryItem story={story} />
                {index < stories.length - 1 && <hr />} {/* Separate each story */}
            </div>
            ))}
        </div>
    );
};

export default SearchDropdown;
