import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { Actions, jsonformsReducer } from '@jsonforms/core';
import { person } from '@jsonforms/examples';
import { materialFields, materialRenderers } from '@jsonforms/material-renderers';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
