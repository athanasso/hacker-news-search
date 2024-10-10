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
            .finally(() => setLoading(false));
        }
    }, [query]);

    return { stories, loading };
};

export default useSearchStories;
