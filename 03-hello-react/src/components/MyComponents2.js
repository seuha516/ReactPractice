import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponents2 extends Component {
  static defaultProps = {
    name2: "기본 이름",
  };
  static propTypes = {
    str: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, name2, children, str, favoriteNumber } = this.props;
    return (
      <>
        <div>
          이름: {name}, 이름2: {name2}, children: {children}
          <br />
          string: {str}, favoriteNumber: {favoriteNumber}
        </div>
      </>
    );
  }
}

// MyComponents2.defaultProps = {
//   name2: "기본 이름",
// };

// MyComponents2.propTypes = {
//   str: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponents2;
