import { useState } from 'react';
import Pagination from './Pagination';

const SavedStories = ({ stories, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const storiesPerPage = 3;

    // Calculate total pages
    const totalPages = Math.ceil(stories.length / storiesPerPage);

    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;

    const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

    return (
        <div className="saved-stories">
            <h2>Saved Stories</h2>
            {stories.length === 0 ? (
            <p>No stories saved.</p>
            ) : (
            currentStories.map((story, index) => (
                <div key={index} className="saved-story">
                    <h4>{story.title}</h4>
                    <button onClick={() => onDelete(story)}>Delete</button>
                </div>
                ))
            )}

            {/* Pagination Component */}
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default SavedStories;