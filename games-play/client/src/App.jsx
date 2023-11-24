import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext.jsx';
import Path from './paths.js';

import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import GameList from './components/game-list/GameList.jsx';
import GameCreate from './components/game-create/GameCreate.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx'
import GameDetails from './components/game-details/GameDetails.jsx';
import Logout from './components/logout/Logout.jsx';

function App() {
   return (
      <AuthProvider>
         <div id="box">
            <Header />
            <Routes>
               <Route path={Path.Home} element={<Home />} />
               <Route path={Path.Games} element={<GameList />} />
               <Route path={Path.Create} element={<GameCreate />} />
               <Route path={Path.Login} element={<Login />} />
               <Route path={Path.Register} element={<Register />} />
               <Route path={Path.Details} element={<GameDetails />} />
               <Route path={Path.Logout} element={<Logout />} />
            </Routes>
         </div>
      </AuthProvider>
   );
}

export default App;
