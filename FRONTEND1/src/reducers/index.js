import { combineReducers } from "redux";
import { dealers} from "./dealer";
import {users} from "./users";
import {species} from "./species";


export default combineReducers({dealers,users,species});