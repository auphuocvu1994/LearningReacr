import { combineReducers } from "redux"; 
import counter from "../reducer/counter-reducer"; 
const allReducers = combineReducers({ counter, // add more reducers here
});

export default allReducers;