const patients = [];

function addPatient(patient) {
  patients.push(patient);
}

function getPatients() {
  return patients;
}

module.exports = { addPatient, getPatients };