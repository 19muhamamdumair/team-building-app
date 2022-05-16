import React from "react";

import * as actionTypes from "../Action/ActionTypes";
const initialState = {
  teams: [
    {
      id: 1,
      name: "Project",
      member_count: 2,
      team_color:"#008000",
    },
    {
      id: 2,
      name: "Engineering",
      member_count: 4,
      team_color:"#ffa500",
    },
    {
      id: 3,
      name: "Design",
      member_count: 2,
      team_color:"#0000ff",
    },
    {
      id: 4,
      name: "QA",
      member_count: 2,
      team_color:"#ff0000",
    },
  ]
};
const TeamsReducer = (state = initialState, action) => {
  if (action.type === actionTypes.CREATE_TEAM) {
    return {
      ...state,
      teams: [
        ...state.teams,
        {
          id: action.payload.teamId,
          name: action.payload.teamName,
          member_count: action.payload.memberCount,
          team_color:action.payload.teamColor
        },
      ],
    };
  }
  if(action.type===actionTypes.UPDATE_TEAM)
  {
    const prevState = state.teams;
    let tempArray = [];
    console.log(prevState)
    prevState.map((team) => {
      if (team.id === action.payload.prevId) {
        tempArray.push({ ...team,id:action.payload.newTeamId, name: action.payload.newTeamName,
        team_color:action.payload.newColor
        });
      } else {
        tempArray.push(team);
      }
    });
    state.teams = tempArray;
  }
  
  if (action.type === actionTypes.INCREMENT_COUNTER) {
    debugger;
    const prevState=state.teams
    prevState.map((team) => {
      if (team.name === action.payload.teamName) {
        action.payload.memberCount = team.member_count + 1;
        console.log(action.payload.memberCount)
        return {
          ...state,
          teams: [
            ...state.teams,

            (team.member_count = action.payload.memberCount),
          ],
        };
      }
    });
  }
  return state;
};

export default TeamsReducer;
