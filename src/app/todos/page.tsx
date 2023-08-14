import Link from "next/link";
import { todo } from "node:test";

export async function getData() {
  const res = await fetch("http://localhost:3000/api/todos", {
    next: {
      revalidate: 10,
    },
  });
  return res.json();
}

type Todo = {
  id: number;
  title: string;
};
export default async function Page() {
  const todos: Todo[] = await getData();
  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
      <Link href="/">Home</Link>
    </div>
  );
}
