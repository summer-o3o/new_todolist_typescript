import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submit, remove } from './action/action';

const Main = () => {
  const [value, setValue] = useState('');
  const [id, setId] = useState(0);
  const todoList = useSelector(state => state.todoList.todoList);
  const dispatch = useDispatch();

  const handlechange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setId(id + 1);
    dispatch(submit(id, value));
    setValue('');
  };

  const handleRemove = id => {
    dispatch(remove(id));
  };

  console.log(todoList);

  return (
    <>
      <strong>할일 작성</strong>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handlechange} value={value} />
        <button type="submit">전송</button>
      </form>
      <strong>할일목록</strong>
      <ul>
        {todoList.map(item => (
          <li key={item.id}>
            {item.id}
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
