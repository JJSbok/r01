

const TodoList = ({arr, removeFn}) => {

    return ( 
        <div>
    Todo List
    <ul>
        {arr.map(todo => 
        <li key={todo.tno} className="m-3 text-3xl p-3">{todo.tno} - {todo.title}
        <button 
        className="bg-white m-3"
        onClick={() => removeFn(todo.tno)}
        >X</button>
        </li>)}
    </ul>
        </div>
     );
}
 
export default TodoList;