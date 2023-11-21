import Item from './Item.jsx';
import { useEffect, useState } from 'react';
import * as userService from '../../services/userServce.js';
import Spinner from '../LoadingOverlaps/Spinner.jsx';
import Info from './Info.jsx';
import CreateUser from './CreateUser.jsx';
import DeleteUser from './DeleteUser.jsx';
import NoUsers from '../LoadingOverlaps/NoUsers.jsx';

const Table = () => {
   const [users, setUsers] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [selectedUser, setSelectedUser] = useState(null);
   const [showInfo, setShowInfo] = useState(false);
   const [showCreate, setShowCreate] = useState(false);
   const [showDelete, setShowDelete] = useState(false);
   const [showNoUsers, setShowNoUsers] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      userService
         .getAll()
         .then((result) => setUsers(result))
         .catch((err) => console.log(err))
         .finally(() => setIsLoading(false));
   }, []);

   const userInfoClickHandler = async (userId) => {
      setSelectedUser(userId);
      setShowInfo(true);
   };

   //Show modal
   const createUserClickHandler = () => {
      setShowCreate(true);
   };

   //Create user submit handler
   const userCreateHandler = async (e) => {
      // Stop page from refreshing
      e.preventDefault();

      // Get form data
      const data = Object.fromEntries(new FormData(e.currentTarget));

      // Create new user at the server
      const newUser = await userService.create(data);

      // Add newly created user to the local state without the need of fetching users again (SAVES TIME)
      setUsers((state) => [...state, newUser]);

      // Close the modal
      setShowCreate(false);
   };

   const deleteButtonClickHandler = async (userId) => {
      setSelectedUser(userId);
      setShowDelete(true);
   };

   const userDeleteHandler = async () => {
      // Remove user from server
      await userService.deleteUser(selectedUser);

      // Remove user from state
      setUsers((state) => state.filter((user) => user._id !== selectedUser));

      // Close the delete modal
      setShowDelete(false);
   };

   useEffect(() => {
      if (users.length <= 0) {
         setShowNoUsers(true);
      } else {
         setShowNoUsers(false);
      }
   }, [users]);

   return (
      
      <div className="table-wrapper">
         {showNoUsers && (
            <NoUsers/>
         )}
         {/*If isLoading is true => render spinner */}
         {isLoading && <Spinner />}
         {showInfo && (
            <Info onClose={() => setShowInfo(false)} userId={selectedUser} />
         )}
         {showCreate && (
            <CreateUser
               onClose={() => setShowCreate(false)}
               onCreateClick={userCreateHandler}
            />
         )}
         {showDelete && (
            <DeleteUser
               onClose={() => setShowDelete(false)}
               onDeleteClick={userDeleteHandler}
            />
         )}

         <table className="table">
            <thead>
               <tr>
                  <th>Image</th>
                  <th>
                     First name
                     <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-down"
                        className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                        ></path>
                     </svg>
                  </th>
                  <th>
                     Last name
                     <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-down"
                        className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                        ></path>
                     </svg>
                  </th>
                  <th>
                     Email
                     <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-down"
                        className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                        ></path>
                     </svg>
                  </th>
                  <th>
                     Phone
                     <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-down"
                        className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                        ></path>
                     </svg>
                  </th>
                  <th>
                     Created
                     <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-down"
                        className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                        ></path>
                     </svg>
                  </th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => (
                  <Item
                     key={user._id}
                     userId={user._id}
                     createdAt={user.createdAt}
                     email={user.email}
                     firstName={user.firstName}
                     imageUrl={user.imageUrl}
                     lastName={user.lastName}
                     phoneNumber={user.phoneNumber}
                     onInfoClick={userInfoClickHandler}
                     onDeleteClick={deleteButtonClickHandler}
                  />
               ))}
            </tbody>
         </table>
         <button className="btn-add btn" onClick={createUserClickHandler}>
            Add new user
         </button>
      </div>
   );
};
export default Table;
