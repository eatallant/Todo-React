export default function Model(todos) {
  console.log("Input provided to Model:", todos);
  return todos
    ? localStorage.setItem("todos", JSON.stringify(todos))
    : JSON.parse(localStorage.getItem("todos")) || [];
}
