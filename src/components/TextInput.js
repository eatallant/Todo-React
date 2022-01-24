import React from "react";

const TextInput = ({ todos, setTodos, count, setCount }) => {
  const inputValueHandler = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTodos([
        ...todos,
        { id: Math.random() * 1000, text: e.target.value, completed: false },
      ]);

      e.target.value = "";
      incrementCount();
    }
  };
  const incrementCount = () => {
    let currentCount = count;
    setCount(currentCount + 1);
  };

  return (
    <div className='textInputContainer'>
      <input
        className='textInput'
        type='text'
        placeholder='Enter a new task'
        autoFocus={true}
        onKeyPress={inputValueHandler}
      />
    </div>
  );
};

export default TextInput;
