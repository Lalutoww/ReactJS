import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService.js';
import AuthContext from './contexts/authContext.js';
import Path from './paths.js';

import Header from './components/header/Header';
import Home from './components/home/Home';
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';
import GameDetails from './components/game-details/GameDetails';

function App() {
   const navigate = useNavigate();
   const [auth, setAuth] = useState({});

   const loginSubmitHandler = async (values) => {
      const result = await authService.login(values.email, values.password);

      setAuth(result);

      navigate(Path.Home);
   };

   const registerSubmitHandler = async(values) => {
      const result = await authService.register(values.email, values.password);

      setAuth(result);

      navigate(Path.Home);
   };

   const contextValues = {
      loginSubmitHandler,
      registerSubmitHandler,
      username: auth.username || auth.email,
      email: auth.email,
      isAuthenticated: !!auth.accessToken,
   };

   return (
      <AuthContext.Provider value={contextValues}>
         <div id="box">
            <Header />
            <Routes>
               <Route path={Path.Home} element={<Home />} />
               <Route path={Path.Games} element={<GameList />} />
               <Route path={Path.Create} element={<GameCreate />} />
               <Route path={Path.Login} element={<Login />} />
               <Route path={Path.Register} element={<Register />} />
               <Route path={Path.Details} element={<GameDetails />} />
            </Routes>
         </div>
      </AuthContext.Provider>
   );
}

export default App;
