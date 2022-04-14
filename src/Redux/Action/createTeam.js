import * as ActionTypes from './ActionTypes'
export const createTeam =(data)=>{
    return{
        type:ActionTypes.CREATE_TEAM,
        payload:data
    }
}
