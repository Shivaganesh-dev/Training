
const patients = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    disease: "Fever",
    emergency: false,
  },
  {
    id: 2,
    name: "Sarah Smith",
    age: 25,
    disease: "Cold",
    emergency: false,
  },
  {
    id: 3,
    name: "Mike Johnson",
    age: 40,
    disease: "Diabetes",
    emergency: true,
  },
    {
    id: 4,
    name: " Johnson",
    age: 35,
    disease: "Diabetes",
    emergency: false,
  },
    {
    id: 5,
    name: "ram chand",
    age: 25,
    disease: "accident",
    emergency: true,
  },
];


// it showes the senior patients
const seniorPatients = patients.filter(
  patient => patient.age > 35
);

console.log("Senior Patients:");
console.log(seniorPatients);



console.log("Patient Registry");
console.log("----------------");

patients.forEach((patient) => {
  console.log(
    `ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}, Disease: ${patient.disease}`
  );
});
console.log("\nTotal Patients:", patients.length);

const averageAge =
  patients.reduce((sum, p) => sum + p.age, 0) / patients.length;
console.log("Average Age:", averageAge);

const diabetesPatients = patients.filter(
  p => p.disease === "Diabetes"
);

console.log("\nDiabetes Patients:");
console.log(diabetesPatients);

const emergencyPatients = patients.filter(
  patient => patient.emergency === true
);

console.log("Emergency Patients:");
console.log("-------------------");

emergencyPatients.forEach(patient => {
  console.log(
    `ID: ${patient.id}, Name: ${patient.name}, Disease: ${patient.disease}`
  );
});