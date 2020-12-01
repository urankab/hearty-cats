import './App.css';
import React, { useState } from 'react';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import Navigation from './components/Navigation/Navigation'

function App() {
  const [initalState, setInitalState] = useState({
    route: 'signin',
    avatar: '',
    isSignedIn: false,
    user: {
      id: '',
      username: '',
      avatar: '',
      entries: 0,
      joined: ''
    }
  })

  function LoadUser(data) {
    setInitalState({
      user: {
        id: data.id,
        username: data.username,
        avatar: data.avatar,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  function onRouteChange(route) {
    if (route === 'signout') {
      setInitalState({
        user: {
          route: 'signin',
          avatar: '',
          isSignedIn: false,
          user: {
            id: '',
            username: '',
            avatar: '',
            entries: 0,
            joined: ''
          }
        }
      })
    } else if (route === 'home') {
      setInitalState({
        isSignedIn: true
      })
    }
    setInitalState({ route: route })
  }

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Navigation isSignedIn={initalState.isSignedIn}
        onRouteChange={onRouteChange} />
      {initalState.route === 'home'
        ? <div>
          <p>{initalState.username}</p>
          <p>{initalState.avatar}</p>
          <p>hey!!!! you in</p>
        </div>
        : (
          initalState.route === 'signin'
            ? <SignIn loadUser={initalState.user} onRouteChange={onRouteChange} />
            : <Register loadUser={initalState.user} onRouteChange={onRouteChange} />
        )
      }
    </div>
  );
}

export default App;
