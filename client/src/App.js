import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MessageApp from './components/MessageApp'

// import Navbar from './components/navbar-component'
import RegisterUser from './components/registeration-component'
// import LoginUser from './components/login-component'
// import AddMessage from './components/addmessage-component'
// import Navbar from './components/navbar-component';
// import ListMessages from './components/listmessage-component'
function App() {
  return (
    <Router>
      <div className="App">
     
    <Route exact path="/register" component={RegisterUser} />
    {/* <Route exact path="/login" component={LoginUser} /> */}
    </div>
{/*  
   <Route exact path="/messages/add" component={AddMessage} />
   <Route component={MessageApp}/> */}
   {/* <Route exact path="/messages/list" component={ListMessages} /> */}

  
  </Router>

  

      
     
  );
}

export default App;
