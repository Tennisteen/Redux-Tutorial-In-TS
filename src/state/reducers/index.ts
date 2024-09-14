import { combineReducers } from "redux";
import repositoriesReducer from './repositoresReducers'

const reducers = combineReducers({
    repositories : repositoriesReducer,
});

// repositories = just one state key with values comming from repositoryReducer
export default reducers;

// now we specify the type of state in store , since it has only one reducer therefore state type -> return type of reducer repositoryReducer
export type RootState = ReturnType<typeof reducers>;
// assigning the type of reducers to the state