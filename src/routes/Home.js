import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  function onChnage(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChnage}></input>
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
