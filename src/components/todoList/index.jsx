import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import IconButton from "../../template/iconButton";
import { markAsDone, markAsPending, remove } from "../../actions";

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || [];

    return list.map(todo => (
      <tr key={todo._id} className={todo.done ? "marked-as-done" : ""}>
        <td>{todo.description}</td>
        <td>
          <IconButton
            styles="success"
            icon="check"
            hide={todo.done}
            onClick={() => props.markAsDone(todo)}
          />
          <IconButton
            styles="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.markAsPending(todo)}
          />
          <IconButton
            styles="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => props.remove(todo)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th className="table-actions">Actions</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = ({ todo: { list } }) => ({ list });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
