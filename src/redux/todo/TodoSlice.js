import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoList: [{id:1, text:"Hello World"} ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todoList.push(todo)
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload)
        },
        editToDo:(state,action)=>{
            state.todoList = state.todoList
            .map((todo)=>{
                if(todo.id===action.payload.id){
                    todo.text=action.payload.text
                }
                return todo;
            })
            }
        }
});

export const { addTodo, removeTodo, editToDo  } = todoSlice.actions

export default todoSlice.reducer;

