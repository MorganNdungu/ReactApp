import { Button } from "react-bootstrap";
const Todo =({item})=>{
    return(
        <div>
            <div className="todoitem">
                <h4>{item}</h4>
                <Button variant="danger" type="submit">DONE</Button>

            </div>
        </div>
    )
}
export default Todo;