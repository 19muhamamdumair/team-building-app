import React from "react";
import * as actionTypes from "../Action/ActionTypes";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  members: [
    {
      user_id: uuidv4(),
      user_name: "Bonnie",
      email: "bonnie.doyle@email.com",
      password: "umair123",
      member_id: 1801,
      first_name: "Bonnie",
      last_name: "Doyle",
      roleId: [2],
      team: [2],
    },

    {
      user_id: uuidv4(),
      user_name: "Siu",
      email: "siu.maggio@email.com",
      password: "umair123",
      member_id: 1201,
      first_name: "Siu",
      last_name: "Maggio",

      roleId: [3],
      team: [2, 3, 4],
    },
    {
      user_id: uuidv4(),
      user_name: "Nella",
      password: "umair123",
      email: "nella.brakus@email.com",
      member_id: 2101,
      first_name: "Nella",
      last_name: "Brakus",
      roleId: [4],

      team: [3, 4],
    },
    {
      user_id: uuidv4(),
      user_name: "Clayton",
      password: "umair123",
      member_id: 1008,
      first_name: "Clayton",
      last_name: "Connelly",
      roleId: [3],
      email: "clayton.connelly@email.com",
      team: [1, 3],
    },
    {
      user_id: uuidv4(),
      user_name: "umair",
      password: "umair123",
      member_id: 1009,
      first_name: "Muhammad",
      last_name: "Umair",
      roleId: [1],
      email: "umair@gmail.com",
      team: [1,2,3,4],
    },
    {
      user_id: uuidv4(),
      user_name: "hassan",
      password: "umair123",
      member_id: 1010,
      first_name: "Hassan",
      last_name: "Ali",
      roleId: [3],
      email: "hassan@email.com",
      team: [1, 3],
    },
    {
      user_id: uuidv4(),
      user_name: "irtaza",
      password: "umair123",
      member_id: 1011,
      first_name: "Muhammad",
      last_name: "Irtaza",
      roleId: [1],
      email: "irtaza@email.com",
      team: [4, 2],
    },
    {
      user_id: uuidv4(),
      user_name: "sharukh",
      password: "umair123",
      member_id: 1012,
      first_name: "Muhammad",
      last_name: "Sharukh",
      roleId: [1],
      email: "sharukh@email.com",
      team: [1],
    },
    {
      user_id: uuidv4(),
      user_name: "zeeshan",
      password: "umair123",
      member_id: 1013,
      first_name: "Muhammad",
      last_name: "Zeeshan",
      roleId: [1],
      email: "zeeshan@email.com",
      team: [1],
    },
    {
      user_id: uuidv4(),
      user_name: "umer",
      password: "umair123",
      member_id: 1014,
      first_name: "Muhammad",
      last_name: "Umer",
      roleId: [3],
      email: "umer@email.com",
      team: [3],
    },
  ],
};
const MembersReducer = (state = initialState, action) => {
  if (action.type === actionTypes.CREATE_MEMBER) {
    const prevState = state.members;
    let tempArray = [];
    prevState.map((member) => {
      if (member.email === action.payload.email) {
        // console.log("Email matched")
        tempArray.push({
          ...member,
          first_name: action.payload.firstName,
          last_name: action.payload.lastName,
          member_id: uuidv4(),
          // email: action.payload.email,
          // roleId: [...member.roleId],
          // team: [...state.members.team, action.payload.teamId],
        });
      } else {
        tempArray.push(member);
      }
    });
    state.members = tempArray;
  }
  if (action.type === actionTypes.ASSIGN_ROLE) {
    function removeDuplicates(arr) {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    let changeDoc = state.members.find(
      (f) => f.user_name === action.payload.name
    ); //finding user
    changeDoc = {
      ...changeDoc,
      roleId: [...changeDoc.roleId, ...action.payload.roleId],
    }; //inserting roleId array
    changeDoc.roleId = removeDuplicates(changeDoc.roleId);
    const index = state.members.findIndex(
      (f) => f.user_name === action.payload.name
    ); //finding index of that user
    let newMembers = state.members;
    newMembers[index] = changeDoc; //inserting updated data of that specific user

    return { ...state, members: newMembers };
  }
  if (action.type === actionTypes.ASSIGN_TEAM) {
    function removeDuplicates(arr) {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    let changeDoc = state.members.find(
      (f) => f.email === action.payload.email
    ); //finding user
    changeDoc = {
      ...changeDoc,
      team: [...changeDoc.team, action.payload.teamId],
    }; //inserting roleId array
    changeDoc.team = removeDuplicates(changeDoc.team);
    const index = state.members.findIndex(
      (f) => f.email === action.payload.email
    ); //finding index of that user
    let newMembers = state.members;
    newMembers[index] = changeDoc; //inserting updated data of that specific user

    return { ...state, members: newMembers };
  }
  if (action.type === actionTypes.CREATE_USER) {
    
    return {
    
      ...state,
      members: [
        ...state.members,
        {
          user_id: uuidv4(),
          user_name: action.payload.userName,
          email: action.payload.email,
          password: action.payload.password,
          member_id: null,
          first_name: "",
          last_name: "",
          // email: action.payload.email,
          roleId: null,
          team: [],
        },
      ],
    }
  }

  return state;
};

export default MembersReducer;
