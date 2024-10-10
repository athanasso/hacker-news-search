export const fetchStories = async (query) => {
    const response = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}`
    );

    // Check if response is ok
    if (!response.ok) {
        throw new Error('Network error');
    }

    const data = await response.json();
    return data.hits.length > 0
        ?data.hits.map(({ title, author, num_comments, points }) => ({
            title,
            author,
            num_comments,
            points,
        }))

        :[]; // Return empty array if no stories found
};
