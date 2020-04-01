import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function FrontEnd(props){
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

    const handleClick=(comp)=>{
        console.log('handle click')
  return comp
        
    }
    return(<div>
         {props.user.length}
        
        <h1>Front-End Developers</h1>
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
    </div>)
}

const mapStateToProps=(state,props)=>{
    return {
        user:state.users.filter(user=>user.jobTitle=='Front-End Developer')
    }
}
export default connect(mapStateToProps)(FrontEnd)