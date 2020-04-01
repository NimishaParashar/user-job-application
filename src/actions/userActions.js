import axios from '../config/axios'
import Swal from 'sweetalert2'

export const startGetUser=()=>{
    return (dispatch)=>{
        axios.get('/users/application-forms').then(response=>{
            console.log(response.data)
            const user=response.data
            dispatch(getUser(user))
        }).catch(err=>{
            console.log(err)
        })
    }
}

const getUser=(users)=>{
    return{
        type:'SET_USER',payload:users
    }
}

export const startAddUser=(formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/users/application-form',formData).then(response=>{
            console.log(response.data)
            dispatch(addUser(response.data))
            redirect()
        }).catch(err=>{
console.log(err)
        })
    }
}

const addUser=(user)=>{
    return{
        type:'ADD_USER',payload:user
    }
}



export const startUpdateUser=(id,formData)=>{
    return (dispatch)=>{
      axios.put(`/users/application-form/update/${id}`,formData).then(response=>{
          console.log(response.data)
          dispatch(updateUser(response.data))
      }).catch(err=>{
          console.log(err)
      })
    }
}


const updateUser=(user)=>{
    return {
        type:'UPDATE_USER',payload:user
    }
}

export const startGetOneUser=(id)=>{
    return (dispatch)=>{
        axios.get(`/users/application-form/${id}`).then(response=>{
            console.log("data"+response.data.name)
            const user=response.data
            Swal.fire(`Contact Name :${user.name} Email:${user.email} 
            Experience:${user.experience}
            Skills:${user.skills}`)
        }).catch(err=>{
            console.log(err)
        })
    }
}

















