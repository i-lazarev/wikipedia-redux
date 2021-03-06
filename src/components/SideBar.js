import React from "react";
import { connect } from "react-redux";
import { selectIdxAction } from "../actions";

const SideBar = (props) => {
  const titleClick = (e, idx) => {
    e.preventDefault();
    props.select(idx);
  };
  //console.log(props.data);

  switch (props.data.status) {
    case "START":
      return <h1>LOODING.........</h1>;
    //break;
    case "FAILED":
      return <h1>FAILED.........</h1>;
    //break;
    case "SUCCESS":
      return (
        <ul>
          {props.data.data.map((elm, idx) => (
            <li key={idx}>
              <a
                href="#"
                onClick={(e) => {
                  titleClick(e, idx);
                }}
              >
                {elm.title}
              </a>
            </li>
          ))}
        </ul>
      );
    // break;

    default:
      return null;
    //break;
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.results,
  };
};

export default connect(mapStateToProps, { select: selectIdxAction })(SideBar);
