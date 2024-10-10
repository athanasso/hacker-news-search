import { useState, useEffect } from 'react';
import { fetchStories } from '../services/hackerNewsAPI';

const useSearchStories = (query) => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (query.length >= 3) {
            setLoading(true);
            fetchStories(query)
                .then((stories) => setStories(stories))
                .catch((error) => {
                    console.error("Error fetching stories:", error);
                    setStories([]); // Set to empty array on error
                })
                .finally(() => setLoading(false));
        } else {
            setStories([]); // Reset stories if query is less than 3 characters
        }
    }, [query]);

    return { stories, loading };
};

export default useSearchStories;
