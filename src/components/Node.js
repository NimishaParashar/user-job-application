import React from 'react'
import {connect} from 'react-redux' 
import {Link} from 'react-router-dom'

function Node(props){
    const handleCheck=(status)=>{
        if(status=="applied"){
           return (<div> <button>shortlisted</button>
            <button>Reject</button></div>)
        }else if(status=="shortlisted"){
            return (<div> <button>shortlisted</button>
               </div>)
        }else if(status=="rejected"){
            return (<div> <button>rejected</button>
                </div>)
        }

    }
    return(<div>
 {props.user.length}
 <button><Link to={'/dashboard'}>Front-End Developer</Link></button>
<button><Link to={'/user/node'}>Node.js Developer</Link></button>
<button><Link to={'/user/mean_stack'}>Mean Stack Developer</Link></button>
<button><Link to={'/user/full_stack'}>Full Stack Developer</Link></button>
        <h1>Node js Developers</h1>
        <h4>List of candidates applied for Node js Developers Job</h4>

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
    {props.user.map(user=>{
        return <tr>
            <td>{user.name}</td>
            <td>{user.skills}</td>
            <td>{user.experience}</td>
            <td>{user.createdAt}</td>
            <td><button>View Details</button></td>
    <td>{handleCheck(user.status)}</td>
        </tr>
    })}

</tbody>
        </table>

    </div>)
}
const mapStateToProps=(state,props)=>{
    return {
        user:state.users.filter(user=>user.jobTitle=='Node.js Developer')
    }
}
export default connect(mapStateToProps)(Node)