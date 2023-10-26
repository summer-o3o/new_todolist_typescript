import { useState } from 'react';
export interface TodoList {
  id: number;
  content: string;
}

const Main = () => {
  const [value, setValue] = useState<string>('');
  const [id, setId] = useState<number>(0);
  const [todoList, setTodoList] = useState<TodoList[]>([]);

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setId(id + 1);

    const newTodo = {
      id: id,
      content: value,
    };

    setTodoList([newTodo, ...todoList]);
    setValue('');
  };

  return (
    <>
      <strong>할일 작성</strong>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handlechange} value={value} />
        <button type="submit">전송</button>
      </form>
      <strong>할일목록</strong>
      <ul>
        {todoList.map(({ id, content }) => (
          <li key={id}>
            {content} <button type="button">수정</button>
            <button type="button">삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;
