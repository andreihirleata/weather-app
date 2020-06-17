import React from "react";

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
      <div>
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
