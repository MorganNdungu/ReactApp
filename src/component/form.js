import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import shortid from 'shortid';

const TodoForm = ({todo, setTodo, todoList, setTodoList}) => {
  // const [item, setItem] = useState('');
  // const [ todolist, setTodolist] =useState([]);

  const handleChange=(event)=>{
    setTodo(event.target.value);
    // console.log(todo);
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // let temp = todolist;
    // temp.push (item);
    setTodoList([...todoList, {name: todo, id:shortid.generate()}]);
    console.log (todoList);
    setTodo("");
  }
  return (
    <div>
        <Form className="container" onSubmit={handleSubmit}>
          <Form.Group>
               <Form.Label>add Item</Form.Label>
        <Form.Control type="text" value={todo} onChange={handleChange} placeholder="Enter item" /><br></br>
          </Form.Group>
     
       
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  
  );
}

export default TodoForm;