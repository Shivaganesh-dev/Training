// Generics Example

// Patient Model
interface Patient {
    id: number;
    name: string;
    age: number;
}

// Doctor Model
interface Doctor {
    id: number;
    name: string;
    specialization: string;
}

// Appointment Model
interface Appointment {
    id: number;
    patientName: string;
    doctorName: string;
    appointmentDate: string;
}

// Generic Function

function save<T>(data: T): T {
    console.log("Data Saved Successfully");
    return data;
}

// ----------------------------------------------------

// Save Patient
const patient = save<Patient>({
    id: 1,
    name: "Rahul",
    age: 28
});

// Save Doctor
const doctor = save<Doctor>({
    id: 101,
    name: "Dr. Priya",
    specialization: "Cardiologist"
});

// Save Appointment
const appointment = save<Appointment>({
    id: 5001,
    patientName: "Rahul",
    doctorName: "Dr. Priya",
    appointmentDate: "28-06-2026"
});

console.log(patient);
console.log(doctor);
console.log(appointment);

// -------------------------------------------------

// Generic API Response

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

const patientResponse: ApiResponse<Patient> = {
    success: true,
    message: "Patient Registered Successfully",
    data: patient
};

const doctorResponse: ApiResponse<Doctor> = {
    success: true,
    message: "Doctor Added Successfully",
    data: doctor
};

console.log(patientResponse);
console.log(doctorResponse);

// -------------------------------------------

// Generic Class
class HospitalStore<T> {

    private records: T[] = [];

    add(record: T): void {
        this.records.push(record);
    }

    getAll(): T[] {
        return this.records;
    }
}

const patientStore = new HospitalStore<Patient>();

patientStore.add({
    id: 2,
    name: "Anjali",
    age: 30
});

patientStore.add({
    id: 3,
    name: "Ravi",
    age: 45
});

console.log(patientStore.getAll());


// Multiple Generics
function assignDoctor<P, D>(patient: P, doctor: D) {
    return {
        patient,
        doctor
    };
}

const assignment = assignDoctor(patient, doctor);

console.log(assignment);


// Generic Constraint
interface Person {
    id: number;
    name: string;
}

function displayPerson<T extends Person>(person: T): void {
    console.log("ID :", person.id);
    console.log("Name :", person.name);
}

displayPerson(patient);
displayPerson(doctor);