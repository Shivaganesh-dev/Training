const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

const { addDoctor } = require("../services/DoctorService");
const { addPatient } = require("../services/PatientService");

function seedData() {
  addDoctor(new Doctor(1, "Dr. Smith", "Cardiologist", ["10AM", "11AM"]));
  addDoctor(new Doctor(2, "Dr. John", "Neurologist", ["1PM", "2PM"]));
  addDoctor(new Doctor(3, "Dr. Suresh", "Physician", ["3PM", "4PM"]));

  addPatient(new Patient(1, "Rahul", "Fever"));
  addPatient(new Patient(2, "Amit", "Cold"));
  addPatient(new Patient(3, "Sara", "Headache"));
}

module.exports = seedData;