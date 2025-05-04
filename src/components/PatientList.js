// src/components/PatientList.js
import React, { useState, useEffect } from 'react';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/patients')
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error('Error fetching patients:', error));
  }, []);

  return (
    <div>
      <h1>Patient List</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>{patient.name} - {patient.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;