import React from "react";
import "./styles.css";

import { useEffect, useState } from "react";

export default function App() {
  const [todo, setTodo] = useState({
    name: "",
    sex: "",
    age: "",
    mail: "",
    password: ""
  });
  const [list, setList] = useState([]);
  console.log("list", list);
  const handelChnage = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    // console.log("modified me ")
  }, [todo]);
  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log("mikey",todo)
    setList([...list, todo]);
    setTodo({ name: "", sex: "", age: "", mail: "", password: "" });

    setTimeout(() => {
      console.log("hello", todo, list);
    }, 500);
  };
  return (
    <div className="App">
      <h1>Hello Todo list</h1>
      <input
        onChange={handelChnage}
        value={todo?.name}
        placeholder={"Name"}
        name={"name"}
        type={"text"}
      />
      <input
        onChange={handelChnage}
        value={todo?.sex}
        placeholder={"Sex"}
        name={"sex"}
        type={"text"}
      />
      <input
        onChange={handelChnage}
        value={todo?.age}
        placeholder={"Age"}
        name={"age"}
        type={"number"}
      />
      <input
        onChange={handelChnage}
        value={todo?.mail}
        placeholder={"Mail"}
        name={"mail"}
        type={"mail"}
      />
      <input
        onChange={handelChnage}
        value={todo?.password}
        placeholder={"Password"}
        name={"password"}
        type={"password"}
      />
      <button onClick={handelSubmit}>add details</button>
    </div>
  );
}
