const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
  try {
    const rawTodos = localStorage.getItem(todoKey);
    return rawTodos ? JSON.parse(rawTodos) : [];
  } catch (error) {
    console.error("Invalid JSON in localStorage", error);
    return [];
  }
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task || []));
};
