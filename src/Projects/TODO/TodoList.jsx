import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({
  id,
  curData,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{curData}</span>

      <button className="check-btn" onClick={() => onHandleCheckedTodo(id)}>
        <MdCheck />
      </button>

      <button className="delete-btn" onClick={() => onHandleDeleteTodo(id)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
export default TodoList;
