import * as actionTypes from '../Action/ActionTypes'
const initialState={
    todo:[
        {
            'id':1,
            'title':'Hit the gym',
            'done':false
        },
        {
            'id':2,
            'title':'Go to university',
            'done':false
        },
    ]
}
const TodoReducer=(state=initialState,action)=>{
 
    if(action.type===actionTypes.CREATE_TODO)
    {
      
     
        return {
          
            ...state,
           todo:[...state.todo,action.payload]
        }
    }
    if(action.type===actionTypes.DELETE_TODO)
    {
      
     
        return {
          
            ...state,
           todo:state.todo.filter((todo)=>{
               return todo.id!==action.payload
           })
        }
    }
    if(action.type===actionTypes.UPDATE_TODO)
    {
      
        state.todo.find((todo)=>{
            if(todo.id===action.payload.id)
            {
              console.log("UPDATE_TODO")
              return{
                ...state,todo:[...state.todo,
                  
                  todo.title=action.payload.title
               
                ]
              }
            }

        } )
    }
    return state 
}
export default TodoReducer