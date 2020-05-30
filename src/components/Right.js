import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNames } from "../actions/names";

const Right = (props) => {
  useEffect(() => {
    getNames();
  }, []);

  return (
    <Fragment>
      {props.names.names.map((name) => {
        return <h3> {name}</h3>;
      })}
    </Fragment>
  );
};
Right.propTypes = {
  getNames: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  names: state.names,
});

export default connect(mapStateToProps, { getNames })(Right);
