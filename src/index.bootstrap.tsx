import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { autorunReducer } from './model';
import { Autorun } from './component';
import './asset/bootstrap.css';
import 'normalize.css/normalize.css';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import reportWebVitals from './reportWebVitals';
import { AutorunState } from './type';

import { bsDmReducer } from '@brightsign/bsdatamodel';
import { baCmReducer } from '@brightsign/ba-context-model';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const reducers = combineReducers<AutorunState>({
  bacdm: baCmReducer,
  bsdm: bsDmReducer,
  bsPlayer: autorunReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      thunk,
    ),
  ));

ReactDOM.render(
  <Provider store={store}>
    <Autorun />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
