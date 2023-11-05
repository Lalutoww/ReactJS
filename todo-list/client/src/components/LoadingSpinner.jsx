export default function LoadingSpinner() {
   return (
      <main className="main">
         <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="table-wrapper">
               <div className="loading-container">
                  <div className="loading-spinner">
                     <span className="loading-spinner-text">Loading</span>
                  </div>
               </div>
               <table className="table">
                  <thead>
                     <tr>
                        <th className="table-header-task">Task</th>
                        <th className="table-header-status">Status</th>
                        <th className="table-header-action">Action</th>
                     </tr>
                  </thead>
                  <tbody></tbody>
               </table>
            </div>
         </section>
      </main>
   );
}
