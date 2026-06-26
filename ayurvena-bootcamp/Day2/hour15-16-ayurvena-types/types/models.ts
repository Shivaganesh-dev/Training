import { Gender, UserRole, AppointmentStatus } from "./enums";

// Patient Model
export interface Patient {
    id: number;
    name: string;
    age: number;
    gender: Gender;
    mobile: string;
}

// Doctor Model
export interface Doctor {
    id: number;
    name: string;
    specialization: string;
    role: UserRole;
}

// Appointment Model
export interface Appointment {
    id: number;
    patientId: number;
    doctorId: number;
    appointmentDate: string;
    status: AppointmentStatus;
}