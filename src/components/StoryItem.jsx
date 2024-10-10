const StoryItem = ({ story, searchTerm, onClick }) => {
    const { title, author, num_comments, points } = story;

    // Function to highlight the search term in the title
    const highlightText = (text) => {
        if (!text || !searchTerm) return text;
        const regex = new RegExp(`(${searchTerm})`, 'gi'); // Case insensitive match
        const parts = text.split(regex); // Split by the search term
        return parts.map((part, index) =>
            regex.test(part) ? <span key={index} className="highlight">{part}</span> : part
        );
    };

    return (
        <div className="story-item" onClick={() => onClick(story)}>
            <h4>{highlightText(title)}</h4>
            <p>By: {author}</p>
            <p>Comments: {num_comments} | Points: {points}</p>
        </div>
    );
};

export default StoryItem;
