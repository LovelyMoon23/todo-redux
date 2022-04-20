// 파일목적: reducer를 하나로 만들었음
// rootReducer는 store를 만들때 사용 예정

import { combineReducers } from 'redux';
import counter from 'modules/counter';
import todos from 'modules/todos';

const rootReducer = combineReducers({ counter, todos });

export default rootReducer;
