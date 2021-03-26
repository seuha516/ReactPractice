import React from "react";
import PropTypes from "prop-types";

const MyComponents = ({ name, name2, children, str, favoriteNumber }) => {
  //const { name, name2, children, str, favoriteNumber } = props;
  return (
    <>
      {/* <div>제 이름은 {props.name}입니다.</div>
      <div>제 이름2는 {props.name2}입니다.</div>
      <div>제 children은 {props.children}입니다.</div> */}

      <div>
        이름: {name}, 이름2: {name2}, children: {children}
        <br />
        string: {str}, favoriteNumber: {favoriteNumber}
      </div>
    </>
  );
};

MyComponents.defaultProps = {
  name2: "기본 이름",
};

MyComponents.propTypes = {
  str: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponents;
