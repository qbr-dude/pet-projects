import { combineReducers, createStore } from "redux";
import { currentBuildingItemReducer } from "./currentBuildItemReducer";
import { currentPageReducer } from './currentPageReducer';

const rootReducer = combineReducers({ buildings: currentBuildingItemReducer, pages: currentPageReducer })
export const store = createStore(rootReducer);