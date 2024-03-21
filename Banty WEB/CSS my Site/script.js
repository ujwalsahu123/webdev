// script.js

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const privateModeToggle = document.getElementById('privateModeToggle');
    const privateModeLabel = document.getElementById('privateModeLabel');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value;
        const isPrivateMode = privateModeToggle.checked;

        // Perform search (simulated in this example)
        const searchResult = performSearch(searchTerm, isPrivateMode);

        // Display search results
        displaySearchResults(searchResult);
    });

    privateModeToggle.addEventListener('change', function () {
        const isPrivateMode = privateModeToggle.checked;
        updatePrivateModeLabel(isPrivateMode);
    });

    function performSearch(searchTerm, isPrivateMode) {
        // Simulated search function
        // In a real implementation, you would make an API request or use a search engine's API
        console.log(`Searching for: ${searchTerm}, Private Mode: ${isPrivateMode}`);

        // Simulated search results
        const searchResult = [
            'Result 1',
            'Result 2',
            'Result 3'
            // Add more results as needed
        ];

        return searchResult;
    }

    function displaySearchResults(results) {
        // Clear previous results
        searchResults.innerHTML = '';

        // Display new results
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.textContent = result;
            searchResults.appendChild(resultItem);
        });
    }

    function updatePrivateModeLabel(isPrivateMode) {
        const modeLabel = isPrivateMode ? 'On' : 'Off';
        privateModeLabel.textContent = `Private Mode: ${modeLabel}`;
    }
});
