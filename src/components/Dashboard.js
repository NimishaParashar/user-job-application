import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Dashboard(props){
    const handleChange=(status)=>{handleCheck(status)

        // console.log(status)
        }
    const handleCheck=(status)=>{
        if(status=="applied"){
           return (<div> <button  onClick={()=>
               handleChange('shortlisted')
           }>shortlisted</button>
            <button  onClick={()=>
               handleChange('rejected')
           }>Reject</button></div>)
        }else if(status=="shortlisted"){
            return (<div> <button>shortlisted</button>
               </div>)
        }else if(status=="rejected"){
            return (<div> <button>rejected</button>
                </div>)
        }
    
    }

const handleUser=(title)=>{
 return(props.users.filter(user=>user.jobTitle==title).length)  
}

    return (<div>
<button onClick={()=>handleUser('Front-End Developer')}>Front-End Developer</button>
<button  onClick={()=>handleUser('Node.js Developer')}> Node.js Developer</button>
<button onClick={()=>handleUser('MEAN Stack Developer')}>Mean Stack Developer</button>
<button onClick={()=>handleUser('FULL Stack Developer')}>Full Stack Developer</button>

{/* <h1>Front-End Developers</h1>
        <h4>List of candidates applied for Front-end Developers Job</h4>

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

 */}

    </div>)
}

const mapStateToProps=(state)=>{
    return {
        // user:state.users.filter(user=>user.jobTitle=='Front-End Developer'),
        users:state.users
    }
}

export default connect(mapStateToProps)(Dashboard)