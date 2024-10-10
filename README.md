# Hacker News Search

## Requirements

- Create a React application using any template of your choice.
- Your target browser is the latest Chrome or Firefox; no need to cater for outdated browsers.
- Use the Hacker News Search API to retrieve stories:
  - **API Endpoint**: `https://hn.algolia.com/api/v1/search?query=javascript`
  - For the purpose of this exercise, you will need the following properties from the response:
    - `title` (the story title)
    - `author` (the story author)
    - `num_comments` (the number of comments)
    - `points` (number of story points)
- Do not focus on styling; focus instead on delivering the requested functionality.
- You may use any UI component library or CSS framework as long as you do not use an autocomplete component (like the MUI Autocomplete).
- The dropdown should trigger on typing 3 or more characters.
- You may use any functional libraries of your choice, e.g., lodash, rxjs, redux, react-query, etc.
- Tests are highly valued.
- **Preserve session** is optional.
- **Highlight search term** is optional.
