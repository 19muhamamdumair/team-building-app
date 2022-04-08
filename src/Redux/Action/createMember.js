import * as ActionTypes from './ActionTypes'
export const createMember =(text)=>{
    return{
        type:ActionTypes.CREATE_MEMBER,
        payload:text
    }
}