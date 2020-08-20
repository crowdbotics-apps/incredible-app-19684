import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView192373Reducer from '../features/CalendarView192373/redux/reducers';
import CalendarView192372Reducer from '../features/CalendarView192372/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView192373: CalendarView192373Reducer,
CalendarView192372: CalendarView192372Reducer,

});