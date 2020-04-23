
import { put, takeEvery, all, delay, call } from 'redux-saga/effects'

// Our worker Saga: 将执行异步的 increment 任务
export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
  }
  
  // Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
  export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  }

export function* helloSaga(){
    try {
        console.log(' data is ')
        const data = yield call('fetchuser', 'https://www.baidu.com');
        console.log(' data is ' + JSON.stringify(data))
     } catch (error) {
        
     }
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
  }