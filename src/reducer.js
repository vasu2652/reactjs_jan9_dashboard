
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
        case "SHOW-SNACK":{
            return {
                ...state,
                snackbarProps:{
                    ...state.snackbarProps,
                    open: true,
                    severity: action.severity,
                    message: action.payload
                }
            }
        }
        case "HIDE-SNACK":{
            return {
                ...state,
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