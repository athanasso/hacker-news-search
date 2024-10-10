const StoryItem = ({ story }) => {
    const { title, author, num_comments, points } = story;
    return (
        <div className="story-item">
            <h4>{title}</h4>
            <p>By: {author}</p>
            <p>Comments: {num_comments} | Points: {points}</p>
        </div>
    );
};

export default StoryItem;
