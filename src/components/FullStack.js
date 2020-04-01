import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function FullStack(props){
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

    const handleShow=(user)=>{

       // console.log(id)
        // props.users.find(user=>{
        //     return user._id==id
        // })
console.log(user._id,user.name,user.skills,user.experience)


    //  props.users.find(user=>{
    //     return  user._id==id
    //  })
    }
    const handleTime=(current_datetime)=>{
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let formatted_date = current_datetime +"-" + months[current_datetime] + "-" + current_datetime
       // console.log(formatted_date)
        return formatted_date
    }
    return(<div>
 {props.user.length}
 
 <button><Link to={'/dashboard'}>Front-End Developer</Link></button>
<button><Link to={'/user/node'}>Node.js Developer</Link></button>
<button><Link to={'/user/mean_stack'}>Mean Stack Developer</Link></button>
<button><Link to={'/user/full_stack'}>Full Stack Developer</Link></button>
        <h1>FullStack Developers</h1>
        <h4>List of candidates applied for FullStack Developers Job</h4>
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
            <td><button onClick={()=>{
                handleShow(user)
            }}><Link>View Details</Link></button></td>
    <td>{handleCheck(user.status)}</td>
        </tr>
    })}
</tbody>
        </table>
    </div>)
}
const mapStateToProps=(state,props)=>{
    return {
        user:state.users.filter(user=>user.jobTitle=='FULL Stack Developer'),
        users:state.users
    }
}
export default connect(mapStateToProps)(FullStack)