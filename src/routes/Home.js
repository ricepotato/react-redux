import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
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

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
