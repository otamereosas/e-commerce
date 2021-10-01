import { all, call} from 'redux-saga/effects'

import productsSagas from './productsSaga'

export default function* rootSaga() {
  yield all([
    call(productsSagas)
  ])
}