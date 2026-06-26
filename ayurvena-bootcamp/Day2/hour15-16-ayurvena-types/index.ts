import { Gender, UserRole } from "./types/enums";
import { Patient, Doctor } from "./types/models";
import { ApiResponse } from "./types/responses";

const patient: Patient = {
    id: 1,
    name: "Rahul",
    age: 28,
    gender: Gender.MALE,
    mobile: "9876543210"
};

const doctor: Doctor = {
    id: 101,
    name: "Dr. Priya",
    specialization: "Cardiology",
    role: UserRole.DOCTOR
};

const response: ApiResponse<Patient> = {
    success: true,
    message: "Patient Registered Successfully",
    data: patient
};

console.log(patient);
console.log(doctor);
console.log(response);