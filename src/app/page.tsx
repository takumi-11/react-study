// @jsxImportSource next/client
/* use client */
import { useState } from "react"
import TodoList from "./TodoList"

export default function Home() {
  const [todos, useTodos] = useState({ id: 1, name: 'test', completed: false })

  return <>
    <TodoList todos={todos} />
    <input className="bg-slate-950 text-white rounded-lg" />
    <button>TODO追加</button>
    <button>clear</button>
    <div>合計：</div>
  </>
}
