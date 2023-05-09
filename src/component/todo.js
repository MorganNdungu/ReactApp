import  { useState } from 'react';

const Todo = () => {
  const [item, setItem] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${item} `)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        item:
        <input type="text" value={item} onChange={(event) => setItem(event.target.value)} />
      </label>
      <br />
    
      <br />
      <button type="submit">add Item</button>
    </form>
  );
};

export default Todo;
