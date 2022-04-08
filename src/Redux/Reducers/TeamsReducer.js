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
  if(action.type===actionTypes.CREATE_MEMBER)
  {
      return {
          ...state,
         teams:[...state.teams,action.payload]
      }
  }
  return state
}

export default TeamsReducer