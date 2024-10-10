const SearchBar = ({ query, setQuery }) => {
    return (
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories..."
            className="search-bar"
        />
    );
};

export default SearchBar;
