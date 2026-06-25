const seedData = require("./data/seed");

const { getDoctors } = require("./services/DoctorService");
const { getPatients } = require("./services/PatientService");
const {
  bookAppointment,
  getAppointments,
} = require("./services/AppointmentService");

seedData();

console.log("\n HOSPITAL SYSTEM STARTED");

console.log("\n DOCTORS:");
console.log(getDoctors());

console.log("\n PATIENTS:");
console.log(getPatients());

// BOOK APPOINTMENTS
console.log("\n BOOKING APPOINTMENTS:");

console.log(bookAppointment(1, 1, "10AM"));
console.log(bookAppointment(2, 1, "11AM"));
console.log(bookAppointment(3, 2, "1PM"));

console.log("\n ALL APPOINTMENTS:");
console.log(getAppointments());