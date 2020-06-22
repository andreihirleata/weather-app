import React from "react";

import "../styles/search-form.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
  }
  handleInputChange(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    return (
      <div className="search-bar">
        <div className="search-form">
          <input
            value={this.searchText}
            type="text"
            onChange={(event) => this.handleInputChange(event)}
          ></input>
        </div>
        <button
          className="location-submit"
          value="submit"
          onClick={() => this.props.onSelect(this.state.searchText)}
        >
          Search
        </button>
      </div>
    );
  }
}
export default SearchForm;
