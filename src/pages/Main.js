import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handlechange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleRemove = id => {};

  return (
    <>
      <strong>할일 작성</strong>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handlechange} value={value} />
        <button type="submit">전송</button>
      </form>
      <strong>할일목록</strong>
      <ul>
        <li>
          <button type="button">삭제</button>
        </li>
      </ul>
    </>
  );
};

export default Main;
