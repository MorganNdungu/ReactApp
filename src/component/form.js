import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Todo = ({todo, setTodo, todoList, setTodoList}) => {
  // const [item, setItem] = useState('');
  // const [ todolist, setTodolist] =useState([]);

  const handleChange=(event)=>{
    setTodo(event.target.value);
    console.log(todo);
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // let temp = todolist;
    // temp.push (item);
    setTodoList([...todoList, todo]);
    console.log (todoList);
    // setItem("");
  }
  return (
    <Form className="container" onSubmit={handleSubmit}>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
        <Form.Label>add Item</Form.Label>
        <Form.Control type="text" value={todo} onChange={handleChange} placeholder="Enter item" /><br></br>
        {/* <Form.Text className="text-muted"> */}
          {/* We'll never share your email with anyone else. */}
        {/* </Form.Text> */}
      {/* </Form.Group> */}

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Todo;