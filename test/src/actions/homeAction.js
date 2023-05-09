import axios from "axios";
import { SUCCESS,FAIL } from "../constants/dishesConstant";

export const Dishes = () => async (dispatch) =>{
  try{ 
    const {data} = await axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
    console.log(data);
    dispatch({
        payload:data,type:SUCCESS
    })
    }
    catch(error){
        dispatch({
            payload:error,type:FAIL
        })
    }
}