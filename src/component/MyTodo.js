import Todo from "./form";

const MyTodoList= ({todoList})=>{
    return(
        <div>
            <h3>todo list....</h3>
            <h4>{todoList.map((item)=>(<Todo item={item}/>))}</h4>
        </div>
    )
}
export default MyTodoList;