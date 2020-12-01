import React, { useState } from 'react';

function Register(props) {
   const [userName, setUserName] = useState('')
   const [password, setPassword] = useState('')

   function onUsernameChange(event) {
      setUserName(event.target.value)
   }

   function onPasswordChange(event) {
      setPassword(event.target.value)
   }

   function onSubmitRegister() {
      props.onRouteChange('home')
     
   }

   const stuff = () => {
      if (userName && password) {
         return (
             <div>
                <p>
                   {userName + ' ' + password}
                </p>
             </div>
          )
       }
   }

   return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
         <main className="pa4 black-80">
            <div className="measure">
               <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0">Register</legend>
                  <div className="mt3">
                     <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                     <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        onChange={onUsernameChange}
                        type="username"
                        name="username"
                        id="username" />
                  </div>
                  <div className="mv3">
                     <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                     <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        onChange={onPasswordChange}
                        type="password"
                        name="password"
                        id="password" />
                  </div>
               </fieldset>
               <div className="">
                  <input
                     onClick={onSubmitRegister}
                     className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                     type="submit"
                     value="Register" />
               </div>
               { }
            </div>
         </main>
      </article >
   )
}

export default Register