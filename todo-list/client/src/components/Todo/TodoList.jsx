import { useEffect, useState } from 'react';
import TodoItem from './ToDoItem.jsx';
import getData from '../../services/fetchService.js';
import LoadingSpinner from '../LoadingSpinner.jsx';

export default function TodoList() {
   const [todos, setTodos] = useState({ data: [], isLoading: false });

   useEffect(() => {
      setTodos((todos) => ({ ...todos, isLoading: true }));
      getData('/todos').then((data) => {
         setTodos((todos) => ({ ...todos, data, isLoading: false }));
      });
   }, []);

   function changeStatusHandler(id) {
      const newData = todos.data.map((todos) => todos._id === id ? { ...todos, isCompleted: !todos.isCompleted } : todos)
      setTodos((oldState) => ({...oldState, data: newData}));
   }

   if (todos.isLoading) {
      return (
         <>
            <LoadingSpinner />
         </>
      );
   }

   return (
      <main className="main">
         <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
               <button className="btn">+ Add new Todo</button>
            </div>

            <div className="table-wrapper">
               <table className="table">
                  <thead>
                     <tr>
                        <th className="table-header-task">Task</th>
                        <th className="table-header-status">Status</th>
                        <th className="table-header-action">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {todos.data.map((task) => (
                        <TodoItem
                           key={task._id}
                           _id={task._id}
                           text={task.text}
                           isCompleted={task.isCompleted}
                           changeStatusHandler={changeStatusHandler}
                        />
                     ))}
                  </tbody>
               </table>
            </div>
         </section>
      </main>
   );
}
