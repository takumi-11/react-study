"use client"

import { useState, useRef } from "react"
import TodoList from "./TodoList"

export default function Home() {
  const [todos, setTodos] = useState([{ id: 1, name: 'test', completed: false }])

  const todoNameRef = useRef();

  const addTodo = () => {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, {id:name, name: name, completed: false}]
    })
    todoNameRef.current.value = null;
  }

  return <>
    <TodoList todos={todos} />
    <input tyep="text" className="bg-slate-950 text-white rounded-lg" ref={todoNameRef} />
    <button onClick={addTodo}>タスクを追加</button>
    <button>完了したタスクの削除</button>
    <div>残りのタスク</div>
  </>
}
