import React from 'react'
import {connect} from 'react-redux'
import {startAddUser} from './actions/userActions'
import {withRouter} from 'react-router-dom'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
           phone:'',
           skills:'',
            jobTitle:'',
            experience:''
           
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            jobTitle:this.state.jobTitle,
            experience:this.state.experience,
            skills:this.state.skills
        }
        const redirect=()=>this.props.history.push('/dashboard')
        this.props.dispatch(startAddUser(formData,redirect))
        console.log(formData)
        

    }
    render(){
        return(<div>
            <h1>Form</h1>
            <form onSubmit={this.handleSubmit}>
            <label>Full name</label>
             <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
            <br/>
            <label>Email address</label>
            <input type="text" placeholder="example@gmail.com" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
            <br/>
            <label>ContactNumber</label>
            <input type="text" placeholder="+91 9876543210  "id="phone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
            <br/>
            <label>Applying for Job</label>
            <select name="jobTitle" id="dropdown" value={this.state.jobTitle} onChange={this.handleChange}>
        <option value=''>select</option>
    <option value="MEAN Stack Developer">MEAN Stack Developer</option>
    <option value="Front-End Developer">Front-End Developer</option>
    <option value="FULL Stack Developer">FullStack Developer</option>
    <option value="Node.js Developer">Node.js Developer</option>
            </select>
            <br/>
           
            
            <label>Experience</label>
            <input type="text" placeholder="Experience (2 years 1 month)" id="experience" name="experience" value={this.state.experience} onChange={this.handleChange}/>
            <br/>
            <label>Technical Skills</label>
            <input type="text" placeholder="Technical skills" id="skills" name="skills" value={this.state.skills} onChange={this.handleChange}/>
            <br/>
            <input type="submit" value="Send Application"/>
            </form>
        </div>)
    }
}
// const mapStateToProps=(state,props)=>{
//     return{
//         users:state.users
//     }
// }

export default withRouter(connect()(Form))