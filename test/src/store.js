import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "./reducers/homeReducer";


const middleware = [thunk]
const reducers = combineReducers({
    dishReducer : homeReducer
})
const store = createStore(reducers,applyMiddleware(...middleware))

export default store