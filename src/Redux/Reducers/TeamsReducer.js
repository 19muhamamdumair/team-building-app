import React from 'react'

import * as actionTypes from '../Action/ActionTypes'
const initialState={
    teams:[
        {
          "id": 1,
          "name": "Project",
          "member_count": 2
        },
        {
          "id": 2,
          "name": "Engineering",
          "member_count": 4
        },
        {
          "id": 3,
          "name": "Design",
          "member_count": 2
        },
        {
          "id": 4,
          "name": "QA",
          "member_count": 2
        }
      ]
    }
const TeamsReducer=(state=initialState,action)=>{

  if(action.type===actionTypes.CREATE_TEAM)
  {
      return {
          ...state,
         teams:[...state.teams,{
           id:action.payload.teamId,
           name:action.payload.teamName,
           member_count:action.payload.memberCount
         }]
      }
  }
  if(action.type===actionTypes.INCREMENT_COUNTER)
  {
    
    state.teams.find((team)=>{
      if(team.name===action.payload.teamName)
      {
      
        action.payload.memberCount=team.member_count+1
        return{
          ...state,teams:[...state.teams,
            
            team.member_count=action.payload.memberCount
         
          ]
        }
      }
    })
  
  }
  return state
}

export default TeamsReducer