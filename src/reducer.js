
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
        default:{
            return state;
        }
   }
}
//crud operations on the state are defined here