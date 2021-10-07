import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment"> 
        <form className="ui form" >
            <div className="ui fluid action input">
              <div className='field'>
                {/* <label>Video Search</label> */}
                <input type="text" placeholder="Search Here"/>
                 <div className="ui button">Search</div>
              </div>
             
            </div>
          </form>
      </div>
    )
  }
}

export default SearchBar; 