import React from "react";

class SearchBar extends React.Component {
  state = {term: ""};

  onInputChange = (e) => {
    // Taking the state of the input value
    this.setState({term: e.target.value});
  };

  onFormSubmit = (e) => {
    // Stops the page from rerendering
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className=" search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui fluid action input">
            <div className="field">
              <label>Video Search</label>
              <input
                type="text"
                placeholder="Search Here"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              {/* <div
                className="ui button"
                value={this.state.term}
                onClick={this.onInputChange}
              >
                Search
              </div> */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
