import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService.js';
import usePersistedState from '../hooks/usePersistedState.js';
import Path from '../paths.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const navigate = useNavigate();
   const [auth, setAuth] = usePersistedState('auth', () => {
      localStorage.removeItem('accessToken');

      return {};
   });

   const loginSubmitHandler = async (values) => {
      const result = await authService.login(values.email, values.password);

      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);

      navigate(Path.Home);
   };

   const registerSubmitHandler = async (values) => {
      const result = await authService.register(values.email, values.password);

      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);

      navigate(Path.Home);
   };

   const logoutHandler = () => {
      setAuth({});

      localStorage.removeItem('accessToken');
   };

   const contextValues = {
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      username: auth.username || auth.email,
      email: auth.email,
      userId: auth._id,
      isAuthenticated: !!auth.accessToken,
   };

   return (
      <AuthContext.Provider value={contextValues}>
         {/* Children is default prop for all components and is every component inside the main one */}
         {children}
      </AuthContext.Provider>
   );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
