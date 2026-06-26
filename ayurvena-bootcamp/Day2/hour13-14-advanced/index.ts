// 1. Type Alias

type PatientID = string | number;

let patientId: PatientID = "P101";
patientId = 101;

console.log("Patient ID:", patientId);

// 2. Union Type

function searchPatient(id: string | number) {
    console.log("Searching Patient:", id);
}

searchPatient(101);
searchPatient("P102");

// 3. Literal Type

type AppointmentStatus =
    | "Pending"
    | "Confirmed"
    | "Completed"
    | "Cancelled";

let status: AppointmentStatus = "Confirmed";

console.log("Status:", status);

// 4. Optional Properties

interface Patient {
    id: number;
    name: string;
    age?: number;
}

const patient1: Patient = {
    id: 1,
    name: "Rahul"
};

console.log(patient1);

// 5. Readonly Property

interface Doctor {
    readonly id: number;
    name: string;
    specialization: string;
}

const doctor: Doctor = {
    id: 101,
    name: "Dr. Priya",
    specialization: "Cardiology"
};

console.log(doctor);


// 6. Intersection Type

interface Person {
    id: number;
    name: string;
}

interface Employee {
    department: string;
}

type HospitalEmployee = Person & Employee;

const receptionist: HospitalEmployee = {
    id: 1,
    name: "Sneha",
    department: "Reception"
};

console.log(receptionist);

// 7. Enum
enum UserRole {
    ADMIN = "ADMIN",
    DOCTOR = "DOCTOR",
    PATIENT = "PATIENT"
}

console.log(UserRole.ADMIN);

// 8. Type Assertion

let value: unknown = "Hospital Management";

let length = (value as string).length;

console.log(length);

// 9. Partial Utility Type

interface Medicine {
    id: number;
    name: string;
    price: number;
}

const medicine: Partial<Medicine> = {
    name: "Paracetamol"
};

console.log(medicine);

// 10. Required Utility Type

interface Room {
    id?: number;
    roomNumber?: string;
}

const room: Required<Room> = {
    id: 10,
    roomNumber: "A101"
};

console.log(room);

// 11. Pick Utility Type

interface PatientDetails {
    id: number;
    name: string;
    age: number;
    mobile: string;
}

type PatientBasic = Pick<PatientDetails, "id" | "name">;

const basicPatient: PatientBasic = {
    id: 1,
    name: "John"
};

console.log(basicPatient);

// 12. Omit Utility Type

type PatientWithoutMobile = Omit<PatientDetails, "mobile">;

const patientData: PatientWithoutMobile = {
    id: 2,
    name: "David",
    age: 40
};

console.log(patientData);


// 14. Nullish Coalescing

let hospitalName: string | null = null;

console.log(hospitalName ?? "Ayurvena Hospital");

// 15. Record Utility Type

const doctors: Record<number, string> = {
    101: "Dr. Priya",
    102: "Dr. Rahul"
};

console.log(doctors);