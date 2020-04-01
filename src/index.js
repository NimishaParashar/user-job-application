import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startGetUser} from './actions/userActions'
import Dashboard from './components/Dashboard'

const store =configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})

 store.dispatch(startGetUser())


 const jsx=(<Provider store={store}>
    <App/>
   
</Provider>)
ReactDOM.render(jsx,document.getElementById('root'))