const SavedStories = ({ stories, onDelete }) => {
    return (
        <div className="saved-stories">
            <h2>Saved Stories</h2>
            {stories.length === 0 ? (
            <p>No stories saved.</p>
            ) : (
            stories.map((story, index) => (
                <div key={index} className="saved-story">
                    <h4>{story.title}</h4>
                    <button onClick={() => onDelete(story)}>Delete</button>
                </div>
                ))
            )}
        </div>
    );
};

export default SavedStories;