// datatypes
let patientName: string = "John";
let age: number = 25;
let isActive: boolean = true;
let salary: bigint = 9007199254740991n;
console.log(patientName, age, isActive, salary);

// arrays
let fruits: string[] = ["Apple", "Mango", "Orange"];
let marks: number[] = [90, 85, 95];
console.log(fruits);
console.log(marks);

// tuple
let patient: [number, string] = [101, "John"];
console.log(patient);

// enum
enum Status {
  Pending,
  Approved,
  Rejected
}
let currentStatus = Status.Rejected;
console.log(currentStatus);

enum Role {
  Admin = "ADMIN",
  Doctor = "DOCTOR",
  Patient = "PATIENT"
}

let currentRole = Role.Doctor;
console.log(currentRole);


// functions
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));

// arr0w function
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(5, 4));

// here greet is directly used to print
function greet(name: string, age?: number) {
  console.log(name, age);
}
greet("John");
greet("John", 25);

// unknowm
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}

let data2: unknown = 100;

if (typeof data2 === "string") {
  console.log(data2.toUpperCase());
} else if (typeof data2 === "number") {
  console.log(data2 * 2);
}

// Generics
function identity<T>(value: T): T {
    return value;
}
let name = identity<string>("Sanjay");
let  userid= identity<number>(23);
console.log(name);
console.log(userid);

// generic object
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
interface User {
    id: number;
    name: string;
}
const userResponse: ApiResponse<User> = {
    success: true,
    data: {
        id: 1,
        name: "John"
    }
};
console.log(userResponse);



interface Patients {
    id: number;
    name: string;
}

interface Doctor {
    id: number;
    specialization: string;
}

function save<T>(data: T): T {
    console.log("Saved");
    return data;
}

const Patients = save<Patients>({
    id: 2,
    name: "John"
});

const doctor = save<Doctor>({
    id: 10,
    specialization: "Cardiologist"
});

console.log(patient);
console.log(doctor);
