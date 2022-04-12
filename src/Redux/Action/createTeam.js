import * as ActionTypes from './ActionTypes'
export const createTeam =(data)=>{
    console.log("create team action")
    return{
        type:ActionTypes.CREATE_TEAM,
        payload:data
    }
}
