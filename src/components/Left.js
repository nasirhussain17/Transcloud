import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addName } from "../actions/names";
import Right from "./Right";

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.addName(this.state.name);
    this.setState({
      name: "",
    });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              this.onChangeName(e);
            }}
            value={this.state.name}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
Left.propTypes = {
  addName: PropTypes.func.isRequired,
};
export default connect(null, { addName })(Left);
