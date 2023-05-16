import Todo from "./todo";

const MyTodoList= ({todoList, setTodoList})=>{
    return(
        <div>
            <h3>todo list....</h3>
            <h4>{todoList.map((item)=>(<Todo key={item.id} item={item} todoList={todoList} setTodoList={setTodoList}/>))}</h4>
        </div>
    )
}
export default MyTodoList;