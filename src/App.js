import React, { useState, useEffect } from "react";
import Store from "./Model/Storage";
import "./App.css";

// import components
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";

function App() {
  const [todos, setTodos] = useState(Store());
  const [count, setCount] = useState(0);
  const [shown, setShown] = useState("");

  // track active count in the page title. Any state change will result in a new count
  // pass state into local storage
  useEffect(() => {
    document.title = `My Todos (${count})`;
    Store(todos);
  });

  return (
    <div className='App App-header'>
      <Header />
      <div className='todosContainer'>
        <TextInput
          todos={todos}
          setTodos={setTodos}
          setCount={setCount}
          count={count}
        />
        <Todos
          todos={todos}
          setTodos={setTodos}
          count={count}
          setCount={setCount}
          shown={shown}
        />
        <footer className='footer'>
          <Footer
            todos={todos}
            setTodos={setTodos}
            count={count}
            setShown={setShown}
          />
        </footer>
      </div>
    </div>
  );
}

export default App;
