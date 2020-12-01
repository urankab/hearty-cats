import React from 'react';
import logo from './logo.png'
import './Navigation.css'

function Navigation(props) {
   if (props.isSignedIn) {
      return (
         <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p onClick={() => props.onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
         </nav>
      )
   }
   else {
      return (
         <div class='nav_box'>
            <img class="cat_logo" src={logo} alt='cat_logo' />
            <h1>Hearty Cats</h1>
            <nav class="nav_routes">
               <p onClick={() => props.onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
               <p onClick={() => props.onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
         </div>
      )
   }
}

export default Navigation