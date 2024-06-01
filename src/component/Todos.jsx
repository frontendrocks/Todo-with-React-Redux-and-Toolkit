import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editToDo, addTodo } from '../redux/todo/TodoSlice';

const Todos = () => {
 
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList);

  const [todoText, setTodoText] = useState('');
  const [isEdit,setIsEdit] = useState(false);
  const [editToDoText, setEditTodoText] = useState({});


  const editHandler = (todoObject) => {
    setEditTodoText(todoObject);
    setTodoText(todoObject.text);
    setIsEdit(true);
  }

  const updateBtnHandler = () =>{
    dispatch(editToDo({id:editToDoText.id,text:todoText}));
    setTodoText('');
    setIsEdit(false);
  }

  const saveBtnHandler = () =>{
    dispatch(addTodo(todoText));
    setTodoText('');
  }

  return (
    <>
      <div className='space-x-3 mt-12 size-full'>
        
        <input 
          className='bg-gray-800 w-1/2 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          type='text'  
          placeholder="add todo text ..."
          value={todoText}
          onChange={(e)=>setTodoText(e.target.value)}
        />
        {
          isEdit ?
          <button
            onClick={()=>updateBtnHandler()} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update
          </button>
          : <button
            onClick={()=>saveBtnHandler()} className='text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Save
          </button>
        }
      </div>
          <ul className="list-none">
            {todoList && todoList.map((todo) => (
              <li key={todo.id} className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
                <div className='text-white'>{todo.text}</div>
                <div className='flex-col'>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Delete
                </button>
                <button
                  className='text-white mx-3 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                  onClick={()=>editHandler(todo)}
                >Edit
                </button>
                </div>
               
              </li>
            ))}
          </ul>
    
    </>
  )
}

export default Todos
