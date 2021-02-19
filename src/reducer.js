
export default function (state, action){
    
   switch(action.type){
        case "LOGIN":{
            return {
                ...state,
                user: action.payload
            };
        }
        case "LOGOUT":{
            return state;
        }
        case "ERRORED":{
            return {
                ...state,
                error: true,
                snackbarProps:{
                    ...state.snackbarProps,
                    open: true,
                    message: action.payload
                }
            }
        }
        case "CLEAR-ERROR":{
            return {
                ...state,
                error: false,
                snackbarProps:{
                    ...state.snackbarProps,
                    open: false,
                    message:""
                }
            }
        }
        default:{
            return state;
        }
   }
}
//crud operations on the state are defined here