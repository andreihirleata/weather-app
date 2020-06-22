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
        <input
          value={this.searchText}
          type="text"
          onChange={(event) => this.handleInputChange(event)}
        ></input>
        <button
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
