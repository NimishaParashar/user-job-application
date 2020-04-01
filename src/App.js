import React from 'react'
import Form from './Form'
import Dashboard from './components/Dashboard'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Node from './components/Node'
import Mean from './components/Mean'
import FullStack from './components/FullStack'
import FrontEnd from './components/FrontEnd'
import MainDashboard from './components/MainDasboard'
import MainScreen from './components/MainScreen'
import MainDasboard from './components/MainDasboard'
import UsersToDoCount from './component/UsersTodoCount'


function App(){
    return(<BrowserRouter>
    <div>
        <h1>Job Application Form</h1>
        {/* <UsersToDoCount /> */}

        {/* <Form /> */}
        {/* <Dashboard /> */}
      
        
         <button ><Link to="/form">Apply for Job</Link></button>
        <button ><Link to="/dashboard">Dashboard</Link></button>
        <Route path="/form" component={Form} />
        <Route path="/dashboard" component={MainScreen}  /> 

        {/* <Route path="/user/node" component={Node}/>
        <Route path="/user/mean_stack" component={Mean}/>
        <Route path="/user/full_stack" component={FullStack}/>
        <Route path="/dashboard" component={Dashboard}  />
        <Route path="/dashboard" component={FrontEnd}/> */}
    </div>
    </BrowserRouter>)
}

export default App