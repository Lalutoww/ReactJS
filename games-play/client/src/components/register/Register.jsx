import useForm from '../../hooks/useForm.js';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext.jsx';

const RegisterFormKeys = {
   Email: 'email',
   Password: 'password',
   ConfirmPass: 'confirm-password',
};

export default function Register() {
   const { registerSubmitHandler } = useContext(AuthContext);
   const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
      [RegisterFormKeys.Email]: '',
      [RegisterFormKeys.Password]: '',
      [RegisterFormKeys.ConfirmPass]: '',
   });

   return (
      <section id="register-page" className="content auth">
         <form id="register" onSubmit={onSubmit}>
            <div className="container">
               <div className="brand-logo"></div>
               <h1>Register</h1>

               <label htmlFor="email">Email:</label>
               <input
                  type="email"
                  id="email"
                  name={RegisterFormKeys.Email}
                  value={values[RegisterFormKeys.Email]}
                  onChange={onChange}
                  placeholder="maria@email.com"
               />

               <label htmlFor="pass">Password:</label>
               <input
                  type="password"
                  name={RegisterFormKeys.Password}
                  value={values[RegisterFormKeys.Password]}
                  onChange={onChange}
                  id="register-password"
               />

               <label htmlFor="con-pass">Confirm Password:</label>
               <input
                  type="password"
                  name={RegisterFormKeys.ConfirmPass}
                  value={values[RegisterFormKeys.ConfirmPass]}
                  onChange={onChange}
                  id="confirm-password"
               />

               <input className="btn submit" type="submit" />

               <p className="field">
                  <span>
                     If you already have profile click <a href="#">here</a>
                  </span>
               </p>
            </div>
         </form>
      </section>
   );
}
