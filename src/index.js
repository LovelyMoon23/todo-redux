import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from 'App';
import 'index.css';
import rootReducer from 'modules/index';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// composeWithDevTools는 리덕스 개발자 도구로 패키지를 통해 설치가능
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
