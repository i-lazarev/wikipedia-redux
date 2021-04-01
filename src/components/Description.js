import React from 'react';
import {connect} from "react-redux";

const Description = (props) => {
    return (
        <div>
            <h2>Description</h2>
            {/* {props.result.data[props.result.selectedIdx].snnippet} */}
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
      result: state.results,
    };
  };

export default connect(mapStateToProps)(Description);