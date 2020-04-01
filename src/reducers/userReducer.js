const initialUser=[]
const userReducer=(state=initialUser,action)=>{
    switch(action.type){
        case 'SET_USER':{
            return [...action.payload]
        }
        case 'ADD_USER':{
            return [...state,action.payload]
        }
        case 'UPDATE_USER':{
            return state.map(user=>{
                if(user._id==action.payload._id){
                    return {...user,...action.payload}
                }else{
                    return {...user}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}

export default userReducer