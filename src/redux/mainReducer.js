import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView192372Reducer from '../features/CalendarView192372/redux/reducers';
import Dashboard1392370Reducer from '../features/Dashboard1392370/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView192372: CalendarView192372Reducer,
Dashboard1392370: Dashboard1392370Reducer,

});