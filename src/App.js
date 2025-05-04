// src/App.js
import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AppointmentScheduler from './components/AppointmentScheduler';
import Prescription from './components/Prescription';
import PatientList from './components/PatientList'; // Import PatientList

const App = () => {
  return (
    <div>
      <h1>Doctor-Patient Portal</h1>
      <Login />
      <Dashboard />
      <AppointmentScheduler />
      <Prescription />
      <PatientList /> {/* Render PatientList component */}
    </div>
  );
};

export default App;