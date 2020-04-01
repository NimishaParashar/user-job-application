import React from 'react'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'
import Moment from 'moment'
import {startUpdateUser,startGetOneUser} from '../actions/userActions'

class MainDashboard extends React.Component{
    constructor(){
        super()
        this.state={
          title:'Front-End Developer'
        
        }
    }

    handleUser=(title)=>{
        if(title=='Node.js Developer'){
            this.setState({title:'Node.js Developer'})
        }else if(title=='MEAN Stack Developer'){
            this.setState({title:'MEAN Stack Developer'})
        }else if(title=='FULL Stack Developer'){
            this.setState({title:'FULL Stack Developer'})
        }else if(title=='Front-End Developer'){
            this.setState({title:'Front-End Developer'})
        }
    }

    handleDetails=(user)=>{
        this.props.dispatch(startGetOneUser(user._id))
       
    }

     handleChange=(status,id,user)=>{
        // console.log(status)
        if(status=='shortlisted'){
            this.handleCheck('shortlisted')
            user.status='shortlisted'
            this.props.dispatch(startUpdateUser(id,user))
        }else {
            this.handleCheck('rejected')
            user.status='rejected'
            this.props.dispatch(startUpdateUser(id,user))
        }
        }
    handleCheck=(status,id,user)=>{
        if(status=="applied"){
           return (<div> <button  onClick={()=>
               this.handleChange('shortlisted',id,user)
           }>shortlisted</button>
            <button  onClick={()=>
               this.handleChange('rejected',id,user)
              
           }>Reject</button></div>)
        }else if(status=="shortlisted"){
            return (<div> <button>shortlisted</button>
               </div>)
        }else if(status=="rejected"){
            return (<div> <button>rejected</button>
                </div>)
        }
    }

    render(){
        return(<div>
            <button onClick={()=>this.handleUser('Front-End Developer')}>Front-End Developer</button>
<button  onClick={()=>this.handleUser('Node.js Developer')}> Node.js Developer</button>
<button onClick={()=>this.handleUser('MEAN Stack Developer')}>Mean Stack Developer</button>
<button onClick={()=>this.handleUser('FULL Stack Developer')}>Full Stack Developer</button>

<h1>{this.state.title}</h1>
    <h2>{this.props.users.length}</h2>
    {this.props.users?
  

(<div>
    <h4>{`List of candidates applied for ${this.state.title} Job`}</h4>

    <table border="2">
<thead>
<tr>
    <th>Name</th>
    <th>Technical Skills</th>
    <th>Experience</th>
    <th>Applied Date</th>
    <th>View Details</th>
    <th>Update Application status</th>
</tr>
</thead>
<tbody>
{( this.props.users.filter(user=>{
   return user.jobTitle==this.state.title
})).map(user=>{
        return <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.skills}</td>
            <td>{user.experience}</td>
            {/* {Moment.locale('en')
    } */}
            <td>{Moment(user.createdAt).format('d/MM/YYYY')
            
            }</td>
            <td><button onClick={()=>this.handleDetails(user)}>View Details</button></td>
            <td>{this.handleCheck(user.status,user._id,user)}</td>
        </tr>
    })}
</tbody>
        </table>
    {/* <ul>
{( this.props.users.filter(user=>{
   return user.jobTitle==this.state.title
})).map(user=>{
    return <li>{user.name}</li>
})}
</ul> */}
</div>)
    :(<div>'No Users darling'</div>)}
        </div>)
    }
}
const mapStateToProps=(state)=>{
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(MainDashboard)