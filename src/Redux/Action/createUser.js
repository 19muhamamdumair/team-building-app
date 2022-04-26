import * as ActionTypes from './ActionTypes'
export const createUser =(data)=>{
    return{
        type:ActionTypes.CREATE_USER,
        payload:data
    }
}
