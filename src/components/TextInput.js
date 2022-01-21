import React from "react";

const TextInput = ({ todos, setTodos }) => {
  const inputValueHandler = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        { id: Math.random() * 1000, text: e.target.value, completed: false },
      ]);
      e.target.value = "";
    }
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
