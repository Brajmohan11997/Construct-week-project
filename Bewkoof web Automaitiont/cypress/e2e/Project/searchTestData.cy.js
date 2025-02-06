import { searchBar } from "./searchBar.cy";


var SearchBar = new searchBar()

describe('HomePage', ()=>{
    beforeEach(() => {
        SearchBar.getBaseURL();// website URL
    });

    it('should search for a valid keyword and show results', () => {
        SearchBar.enterSearchquery('T-shirt');
        SearchBar.clicksearchIcon();
        SearchBar.validateSearchResults('T-shirt'); // Adjust based on actual results
    });

    it('should show no results message for an invalid search', () => {
        SearchBar.enterSearchquery('randominvalidquery123');
        SearchBar.clicksearchIcon();
        SearchBar.validateSearchResults('No results found'); // Adjust based on the message displayed
    });

    it('should handle empty search input gracefully', () => {
        SearchBar.enterSearchquery(' '); // Entering a space
        SearchBar.clicksearchIcon();
        SearchBar.validateSearchResults('search'); // Adjust based on UI message
    });
})