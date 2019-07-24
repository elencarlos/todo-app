import React from "react";

import PageHeader from "../header";
import TodoForm from "../todoForm";
import TodoList from "../todoList";

export default props => {
  return (
    <div className="container">
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm />
      <TodoList />
    </div>
  );
};
