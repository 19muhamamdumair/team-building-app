import * as ActionTypes from './ActionTypes'
export const createUserRole =(data)=>{
    return{
        type:ActionTypes.CREATE_USER_ROLE,
        payload:data
    }
}
export const deleteUserRole =(data)=>{
    return{
        type:ActionTypes.DELETE_USER_ROLE,
        payload:data
    }
}
export const updateUserRole =(data)=>{
    return{
        type:ActionTypes.UPDATE_ROLE_LIST,
        payload:data
    }
}
export const incrementRoleMembers=(data)=>{
    return {
        type:ActionTypes.INCREMENT_ROLE_MEMBERS,
        payload:data
    }
}