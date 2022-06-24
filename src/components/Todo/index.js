// import { useState } from "react";
// import { ITodo } from "../../interfaces";

// const Todo: React.FC<ITodo> = (title: string) => {
//   const [todo, setTodo] = useState<ITodo>({
//     title: title,
//     id: Date.now(),
//     completed: false,
//   });
//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={todo.completed}
//         onChange={onToggle.bind(null, todo.id)}
//         // onChange={() => onToggle(todo.id)}
//       />

//       <span className="indigo-text">{todo.title}</span>
//       <i
//         className="material-icons indigo-text"
//         onClick={() => onRemove(todo.id)}
//       >
//         delete
//       </i>
//     </label>
//   );
// };

// export default Todo;
