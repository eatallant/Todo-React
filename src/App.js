import React, { useState } from "react";
import "./App.css";

// import components
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='App App-header'>
      <Header />
      <div className='todosContainer'>
        <TextInput todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
        <footer className='footer'>
          <Footer todos={todos} />
        </footer>
      </div>
    </div>
  );
}

export default App;
