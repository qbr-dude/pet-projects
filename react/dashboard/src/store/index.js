import { createStore } from "redux";
import { currentBuildingItemReducer } from "./currentBuildItemReducer";


export const store = createStore(currentBuildingItemReducer);