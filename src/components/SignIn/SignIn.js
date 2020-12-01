import React, {useState} from 'react';

function SignIn(props){
    const [signInUsername, setSignInUsername] = useState('')
    const [signInPassword, setSignInPassword] = useState('')

    function onUserNameChange(event){
        setSignInUsername(event.target.value)
    }

    function onPasswordChange(event){
        setSignInPassword(event.target.value)
    }

    function onSubmitSignIn(){
       console.log(signInPassword + signInPassword)
    }

   //  const { onRouteChange } = props.onRouteChange
      return (
         <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
               <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                     <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                     <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                           onChange={onUserNameChange}
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
                        onClick={onSubmitSignIn}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit"
                        value="Sign in" />
                  </div>
                  <div className="lh-copy mt3">
                     <p onClick={() => props.onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                  </div>
               </div>
            </main>
         </article >
      )
}

export default SignIn