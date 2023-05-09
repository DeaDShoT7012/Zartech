import { FAIL, SUCCESS } from "../constants/dishesConstant";



export const homeReducer = (state={dishes:[]},action)=>{
console.log(action.type);
switch(action.type){
    case SUCCESS:
        return{
        dishes:action.payload
    }
    case FAIL:
        return{
            dishes:action.payload 
        }
    default:
        return state    
}
}