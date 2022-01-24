import React from "react";

const Footer = ({ todos, count }) => {
  return (
    <>
      <div className='todo-count'>Remaining items: {count}</div>
    </>
  );
};

export default Footer;
