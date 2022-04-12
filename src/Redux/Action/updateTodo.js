import * as ActionTypes from './ActionTypes'
export const updateTodo =(data)=>{
    return{
        type:ActionTypes.UPDATE_TODO,
        payload:data
    }
}