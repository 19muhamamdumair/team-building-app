import React from 'react'
import * as actionTypes from '../Action/ActionTypes'
import { v4 as uuidv4 } from 'uuid';
const initialState={
    members:[
    {
      "id": 1801,
      "first_name": "Bonnie",
      "last_name": "Doyle",
      "email": "bonnie.doyle@email.com",
      "team": {
        "id": 1,
        "name": "Project"
      }
    },
    {
      "id": 1201,
      "first_name": "Siu",
      "last_name": "Maggio",
      "email": "siu.maggio@email.com",
      "team": {
        "id": 2,
        "name": "Engineering"
      }
    },
    {
      "id": 2101,
      "first_name": "Nella",
      "last_name": "Brakus",
      "email": "nella.brakus@email.com",
      "team": {
        "id": 3,
        "name": "Design"
      }
    },
    {
      "id": 1008,
      "first_name": "Clayton",
      "last_name": "Connelly",
      "email": "clayton.connelly@email.com",
      "team": {
        "id": 2,
        "name": "Engineering"
      }
    },
    {
      "id": 3123,
      "first_name": "Vernia",
      "last_name": "Purdy",
      "email": "vernia.purdy@email.com",
      "team": {
        "id": 1,
        "name": "Project"
      }
    },
    {
      "id": 1821,
      "first_name": "Coretta",
      "last_name": "Homenick",
      "email": "coretta.homenick@email.com",
      "team": {
        "id": 4,
        "name": "QA"
      }
    },
    {
      "id": 2712,
      "first_name": "Wilson",
      "last_name": "O'Hara",
      "email": "wilson.o'hara@email.com",
      "team": {
        "id": 2,
        "name": "Engineering"
      }
    },
    {
      "id": 1722,
      "first_name": "Deanna",
      "last_name": "Kuvalis",
      "email": "deanna.kuvalis@email.com",
      "team": {
        "id": 2,
        "name": "Engineering"
      }
    },
    {
      "id": 2213,
      "first_name": "Rafaela",
      "last_name": "Kiehn",
      "email": "rafaela.kiehn@email.com",
      "team": {
        "id": 4,
        "name": "QA"
      }
    },
    {
      "id": 1911,
      "first_name": "Jeffry",
      "last_name": "Block",
      "email": "jeffry.block@email.com",
      "team": {
        "id": 3,
        "name": "Design"
      }
    }
  ]
}
const MembersReducer=(state=initialState,action)=>{
 
    if(action.type===actionTypes.CREATE_MEMBER)
    {
      
     
        return {
          
            ...state,
           members:[...state.members,{
             id:uuidv4(),first_name:action.payload.firstName,last_name:action.payload.lastName,email:action.payload.email,
             team:{
               id:action.payload.teamId,
               name:action.payload.teamName
             }
           }
          ]
        }
    }
    return state
}

export default MembersReducer