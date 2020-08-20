import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard1392370Reducer from '../features/Dashboard1392370/redux/reducers'
import EmailAuth592368Reducer from '../features/EmailAuth592368/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard1392370: Dashboard1392370Reducer,
EmailAuth592368: EmailAuth592368Reducer,

});