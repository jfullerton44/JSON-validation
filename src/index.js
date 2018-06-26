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


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

const store = createStore(
    combineReducers({ jsonforms: jsonformsReducer() }),  
    {
      jsonforms: {
        renderers: materialRenderers,
        fields: materialFields,
      }
    }
  );

store.dispatch(Actions.init(data, schema, uischema));