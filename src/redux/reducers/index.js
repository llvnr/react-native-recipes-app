import { combineReducers } from "redux";

import { recipes } from './recipes';
import { tasksList } from './tasksList';

export const rootReducer = combineReducers({
    recipes,
    tasksList
})