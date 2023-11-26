import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sumbit, remove } from './action/action';
import store from './store/store';

const Main = () => {
  const [value, setValue] = useState<string>('');
  const todoList = useSelector((state: typeof store) => state.todoList);
  const dispatch = useDispatch();
  interface TodoItem {
    id: number;
    value: string;
  }

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sumbit(value));
    setValue('');
  };

  const handleRemove = (id: number) => {
    dispatch(remove(id));
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
        {todoList.map((item: TodoItem) => (
          <li key={item.id}>
            {item.value}
            <button type="button" onClick={() => handleRemove(item.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;
