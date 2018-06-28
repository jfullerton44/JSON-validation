import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://eliza:<N3z7v91MtqizC5f2>@cluster0-p4rbj.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   db.getSiblingDB("test").getCollection("foo").insert( { "msg" : "My First Document" } )
   client.close();
});




