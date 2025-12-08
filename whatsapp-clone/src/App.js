import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';

class App extends Component {
  state = { 
    results: [], 
    loading: false,
    searchInput: "",
    searched: false
  };

  getData = async (query) => {
    this.setState({ loading: true });

    const options = { method: "GET" };
    // ------------------------------------------------------------------
    // FIX: Using backticks (`) for a Template Literal to include ${query}
    // ------------------------------------------------------------------
    const data = await fetch(
      `https://apis.ccbp.in/wiki-search?search=${query}`,
      options
    );
    // ------------------------------------------------------------------
    const response = await data.json();

    this.setState({
      results: response.search_results || [],
      loading: false,
      searched: true
    });
  };

  onSearchClick = () => {
    const { searchInput } = this.state;
    if (searchInput.trim() !== "") {
      this.getData(searchInput);
    }
  };

  onKeyDownSearch = (event) => {
    if (event.key === "Enter") {
      this.onSearchClick();
    }
  };

  render() {
    const { results, loading, searchInput, searched } = this.state;

    return (
      <div>
        <h1>Wiki Search</h1>

        <input
          type="text"
          placeholder="Search anything..."
          value={searchInput}
          onChange={(e) => this.setState({ searchInput: e.target.value })}
          onKeyDown={this.onKeyDownSearch}
          style={{ padding: "8px", width: "250px", marginRight: "10px" }}
        />

        <button onClick={this.onSearchClick} style={{ padding: "8px 15px" }}>
          Search
        </button>

        <div style={{ marginTop: "20px" }}>
          <ClipLoader color="red" loading={loading} size={50} />
        </div>

        <ul style={{ marginTop: "20px" }}>
          
          {searched && results.length === 0 && !loading ? (
            <h2>No Results Found</h2>
          ) : (
            results.map((i, index) => (
              <li key={index} style={{ marginBottom: "20px" }}>
                <h4>{i.title}</h4>
                <a href={i.link} target="_blank" rel="noreferrer">
                  {i.link}
                </a>
                <p>{i.description}</p>
              </li>
            ))
          )}

        </ul>
      </div>
    );
  }
}

export default App;