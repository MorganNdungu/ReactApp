import  { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const Todo = () => {
  const [item, setItem] = useState('');
  const [ todolist, setTodolist] =useState([]);

  const handleChange=(event)=>{
    setItem(event.target.value);
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    let temp = todolist;
    temp.push (item);
    setTodolist(temp);
    console.log (todolist);
    setItem("");

    // console.log(`${item} `)
  };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>
  //       item:<br></br>
  //       <input type = "text" value = {text} onChange={handleChange}/>

  //       {/* <input type="text" value={item} onChange={(event) => setItem(event.target.value)} /> */}
  //     </label>
  //     <br />
    
  //     <br />
  //     <button type="submit">add Item</button>
  //   </form>  
  //   {todolist.maps((event)=>(<h2>{event}</h2>))}    
    
    // import Button from 'react-bootstrap/Button';

// function BasicExample() {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value= {item} onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value= {item} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}



// export default BasicExample;
 

export default Todo;
