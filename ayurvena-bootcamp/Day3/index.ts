
import { Patient } from "./models/Patient";
import { Doctor } from "./models/Doctor";
import { Appointment } from "./models/Appoinmemt";

import { PatientService } from "./services/PatientService";
import { DoctorService } from "./services/DoctorService";
import { AppointmentService } from "./services/AppointmentService";
import { PaymentService } from "./services/PaymentService";
import { QueueService } from "./services/QueueService";
import { DashboardService } from "./services/DashboardService";

// Create Services

const patientService = new PatientService();
const doctorService = new DoctorService();
const appointmentService = new AppointmentService();
const paymentService = new PaymentService();
const queueService = new QueueService();
const dashboardService = new DashboardService();

// Create Patients

const patient1 = new Patient(
    1,
    "Rahul",
    25,
    "9876543210"
);

const patient2 = new Patient(
    2,
    "Anjali",
    30,
    "9123456789"
);

patientService.add(patient1);
patientService.add(patient2);

// Create Doctors

const doctor1 = new Doctor(
    101,
    "Dr. Priya",
    "Cardiologist"
);

const doctor2 = new Doctor(
    102,
    "Dr. Arun",
    "Dermatologist"
);

doctorService.add(doctor1);
doctorService.add(doctor2);

// Create Appointments

const appointment1 = new Appointment(
    1001,
    patient1.id,
    doctor1.id,
    "28-06-2026"
);

const appointment2 = new Appointment(
    1002,
    patient2.id,
    doctor2.id,
    "29-06-2026"
);

appointmentService.add(appointment1);
appointmentService.add(appointment2);

// Queue Management

queueService.add(patient1.name);
queueService.add(patient2.name);

// Payment

paymentService.pay(500);
paymentService.pay(1000);

// Dashboard

dashboardService.totalPatients =
    patientService.getAll().length;

dashboardService.totalDoctors =
    doctorService.getAll().length;

// Display Data

console.log("\n ----PATIENTS RELATED O/P----");
console.log(patientService.getAll());

console.log("\n ----DOCTORS RELATED O/P----");
console.log(doctorService.getAll());

console.log("\n ----APPOINTMENTS RELATED O/P----");
console.log(appointmentService.getAll());

console.log("\n ----DASHBOARD RELATED O/P----"); 
console.log("Total Patients :", dashboardService.totalPatients);
console.log("Total Doctors  :", dashboardService.totalDoctors);
