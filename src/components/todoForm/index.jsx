import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../../template/grid";
import IconButton from "../../template/iconButton";
import { changeDescription, search, add, clear } from "../../actions";

class TodoForm extends Component {
  keyHandler = e => {
    const { add, search, description } = this.props;
    if (e.key === "Enter") {
      e.shiftKey ? search() : add(description);
    } else if (e.key === "Escape") {
      this.props.clear();
    }
  };

  componentWillMount() {
    this.props.search();
  }

  render() {
    const { add, search, description } = this.props;

    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            onChange={this.props.changeDescription}
            id="description"
            className="form-control"
            placeholder="add task"
            onKeyUp={this.keyHandler}
            value={this.props.description}
          />
        </Grid>
        <Grid cols="12 3 2">
          <IconButton
            styles="primary"
            icon="plus"
            onClick={() => add(description)}
          />
          <IconButton styles="info" icon="search" onClick={search} />
          <IconButton
            styles="default"
            icon="close"
            onClick={this.props.clear}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ todo: { description } }) => ({
  description
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, add, clear }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
