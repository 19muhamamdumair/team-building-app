import * as ActionTypes from './ActionTypes'
export const createMember =(data)=>{
    return{
        type:ActionTypes.CREATE_MEMBER,
        payload:data
    }
}
export const incrementCounter=(data)=>{
    return{
        type:ActionTypes.INCREMENT_COUNTER,
        payload:data
    }
}