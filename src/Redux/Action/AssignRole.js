import * as ActionTypes from './ActionTypes'
export const assignRole =(data)=>{
    return{
        type:ActionTypes.ASSIGN_ROLE,
        payload:data
    }
}