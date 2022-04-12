import * as ActionTypes from './ActionTypes'
export const createTodo =(data)=>{
    return{
        type:ActionTypes.CREATE_TODO,
        payload:data
    }
}