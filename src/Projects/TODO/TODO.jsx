import { useRef, useState, useEffect } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TODO.css";
import TodoDate from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

const TODO = () => {
  const inputRef = useRef(null);
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  // form submit
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // Delete Todo
  const handleDeleteTodo = (id) => {
    const updatedTask = task.filter((curTask) => curTask.id !== id);
    setTask(updatedTask);
    inputRef.current.focus();
  };

  // handleClearTodoData functionality
  const handleClearTodoData = () => {
    setTask([]);
    inputRef.current.focus();
  };

  // Toggle Checked
  const handleCheckedTodo = (id) => {
    const updatedTask = task.map((curTask) =>
      curTask.id === id ? { ...curTask, checked: !curTask.checked } : curTask
    );
    setTask(updatedTask);
  };

  //add todo data in the local storage
  useEffect(() => {
    setLocalStorageTodoData(task);
  }, [task]);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} inputRef={inputRef} />

      <section className="myUnorderList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                id={curTask.id}
                curData={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>

      {/* clear all button */}
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
  );
};
export default TODO;
