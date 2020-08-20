import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView192372Saga from '../features/CalendarView192372/redux/sagas';
import EmailAuth592368Saga from '../features/EmailAuth592368/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView192372Saga,
EmailAuth592368Saga,
    
  ]);
}