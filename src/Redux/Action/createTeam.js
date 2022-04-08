import * as ActionTypes from './ActionTypes'
export const createTeam =(text)=>{
    return{
        type:ActionTypes.CREATE_TEAM,
        payload:text
    }
}