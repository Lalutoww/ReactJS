import { createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children, value }) => {
   return (
      <AuthContext.Provider value={value}>
         {/* Children is default prop for all components and is every component inside the main one */}
         {children}
      </AuthContext.Provider>
   );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
