// Create Patient These define the structure of data received from the client.

export interface CreatePatientDto {
    name: string;
    age: number;
    mobile: string;
}

// Create Doctor

export interface CreateDoctorDto {
    name: string;
    specialization: string;
}

// Create Appointment

export interface CreateAppointmentDto {
    patientId: number;
    doctorId: number;
    appointmentDate: string;
}