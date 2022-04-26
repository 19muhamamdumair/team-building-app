import * as actionTypes from "../Action/ActionTypes";
const initialState = {
  userRoles: [
    {
      id:1,
      roleName:'Administrator',
      member_count:1
    },{
      id:2,
      roleName:'CTO',
      member_count:1
    },{
      id:3,
      roleName:'Developer',
      member_count:1
    },
    {
      id:4,
      roleName:'Team Lead',
      member_count:1
    },
  ],
};
const UserRoleReducer = (state = initialState, action) => {
  
  if (action.type === actionTypes.CREATE_USER_ROLE) {
   
    return {
      ...state,
      userRoles: [
        ...state.userRoles,
        {
          id: action.payload.roleId,
          roleName: action.payload.userRole,
          member_count: action.payload.memberCount,
        },
      ],
    };
  
  }
  if (action.type === actionTypes.DELETE_USER_ROLE) {
    return {
      ...state,
      userRoles: state.userRoles.filter((role) => {
        return role.id !== action.payload;
      }),
    };
  }
  if (action.type === actionTypes.UPDATE_ROLE_LIST) {
      
      const prevState = state.userRoles;
      let tempArray = [];
      prevState.map((role) => {
        if (role.id === action.payload.id) {
          tempArray.push({ ...role, roleName: action.payload.userRole });
        } else {
          tempArray.push(role);
        }
      });
      state.userRoles = tempArray;
  }
  if (action.type === actionTypes.INCREMENT_ROLE_MEMBERS) {

    action.payload.roleId.map((id)=>{
      state.userRoles.find((role) => {
        
        if (role.id ===id) {
  
          let temp= role.member_count + 1;
          return {
            ...state,
            userRoles: [
              ...state.userRoles,
  
              (role.member_count = temp),
            ],
            
          };
         
        }
      });
    })
    
  }
  //   return{
  //     ...state,userRoles:state.userRoles.map((role)=>{
  //       if (role.id === action.payload.id) {
  //         // console.log("id matched updated")
  //         return [...role,{roleName:action.payload.userRole}]
  //         // tempArray.push({ ...role, roleName: action.payload.userRole });
  //       }
  //     })
  //   }
  
  // }

  return state
}
export default UserRoleReducer