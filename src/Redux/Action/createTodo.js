import * as ActionTypes from './ActionTypes'
export const createTodo =(data)=>{
    return{
        type:ActionTypes.CREATE_TODO,
        payload:data
    }
}
export const deleteTodo =(data)=>{
    return{
        type:ActionTypes.DELETE_TODO,
        payload:data
    }
}
export const updateTodo =(data)=>{
    return{
        type:ActionTypes.UPDATE_TODO,
        payload:data
    }
}

