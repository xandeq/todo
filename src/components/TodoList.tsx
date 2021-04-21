import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";
import { Todo } from "../models/Todo";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todos } = useContext<TodoContextType>(TodoContext);

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
