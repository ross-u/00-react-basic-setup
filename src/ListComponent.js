import React from "react";

class ListComponent extends React.Component {
  render() {
    return (
      <div className="List">
        <h2>List Component</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    );
  }
}

export default ListComponent;
