import React from "react";
import { Todo } from "../models/Todo";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos: Todo[] = [
    { id: 1, title: "Ir ao supermercado", done: false },
    { id: 2, title: "Ir a`academia", done: true },
  ];
  return (
    <table>
      <caption>LISTA DE TAREFAS</caption>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((item) => {
          return <TodoListItem todo={item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
};

export default TodoList;
