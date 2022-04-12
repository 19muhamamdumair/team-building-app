import * as ActionTypes from './ActionTypes'
export const deleteTodo =(data)=>{
    return{
        type:ActionTypes.DELETE_TODO,
        payload:data
    }
}