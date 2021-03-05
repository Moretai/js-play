import { take, put } from "redux-saga/effects";
import * as actions from "../actions/counter";

export default function* () {
  console.log("开始执行saga");
  for (let i = 0; i < 3; i++) {
    const action = yield take(actions.ASYNC_INCREASE);
    console.log("action=>", action);
    yield put({ type: actions.INCREASE });
  }
}
