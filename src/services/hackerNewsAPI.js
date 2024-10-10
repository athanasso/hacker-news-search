export const fetchStories = async (query) => {
    const response = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    const data = await response.json();
    return data.hits.map(({ title, author, num_comments, points }) => ({
        title,
        author,
        num_comments,
        points,
    }));
};
