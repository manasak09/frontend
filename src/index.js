import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducer from'./reducer/reducer';
import thunk from 'redux-thunk';
import Login from './login';
import UserRegister from './register';

import InjuryCentre from './curdfunctions/injurycentre';
import UpdateInjuries from './curdfunctions/updateinjury'
import ViewAllinjuries from './curdfunctions/viewallinjuries';
import Addinjuryfom from './curdfunctions/addinjuryfom';

import IncidentCentre from './curdfunctions/incidentcentre';
import UpdateIncidents from './curdfunctions/incidentsupdates';
import ViewAllIncidents from './curdfunctions/incidentsviewall'
import Addincidents from './curdfunctions/addincidents';

import Reports from './curdfunctions/reports';
import AddReports from './curdfunctions/addreports';
import UpdateReports from './curdfunctions/reportsupdate';
import ViewAllReports from './curdfunctions/reportsviewall';


import PreDefinedIncidentAction from './curdfunctions/predefinedincidentaction';
import ViewAllPreDefined from './curdfunctions/predefinedviewall';
import UpdatePreDefined from  './curdfunctions/predefinedupdate';
import AddDefinedAction from './curdfunctions/addpredefined';

import RequestAction from './curdfunctions/requestaction';



const store=createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=>{
  console.log(store.getState())
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   <BrowserRouter>
   <Routes>
     <Route path='/register' element={<UserRegister/>}/>
     <Route path='/' element={<Login/>}/>
     <Route path='/home' element={<App/>}>
      <Route path='/home/injurycentre' element={<InjuryCentre/>}>
        <Route path='/home/injurycentre/view'element={<ViewAllinjuries/>}/>  
        <Route path='/home/injurycentre/update'element={<UpdateInjuries/>}/>
      <Route path='/home/injurycentre/addinjuryfom' element={<Addinjuryfom/>}/>
        </Route>

      <Route path='/home/incidentcentre' element={<IncidentCentre/>}>
        <Route path='/home/incidentcentre/view' element={<ViewAllIncidents/>}/>
        <Route path='/home/incidentcentre/update'element={<UpdateIncidents/>}/>
        <Route path='/home/incidentcentre/addincidents' element={<Addincidents/>}/>
      </Route>

      
      <Route path='/home/reports' element={<Reports/>}>
        <Route path='/home/reports/addreports' element={<AddReports/>} />
        <Route path='/home/reports/view'  element={<ViewAllReports/>}/>
        <Route path='/home/reports/update' element={<UpdateReports/>}/>
        </Route>

      <Route path='/home/predefinedincidentaction' element={<PreDefinedIncidentAction/>}>
        <Route path='/home/predefinedincidentaction/adddefined' element={<AddDefinedAction/>}/>
        <Route path='/home/predefinedincidentaction/view' element={<ViewAllPreDefined/>}/>
        <Route path='/home/predefinedincidentaction/update' element={<UpdatePreDefined/>}/>
        </Route>



      <Route path='/home/requestaction' element={<RequestAction/>}/>
      <Route path='/home/updateinjury' element={<UpdateInjuries/>}>
      
        </Route>


     </Route>
       </Routes></BrowserRouter>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
