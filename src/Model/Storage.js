export default function Store(todos) {
  // used in App.js
  return todos
    ? localStorage.setItem("todos", JSON.stringify(todos))
    : JSON.parse(localStorage.getItem("todos")) || [];
}
