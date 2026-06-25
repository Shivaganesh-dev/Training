
// DOCTORS DATA
const doctors = [
  {
    id: 1,
    name: "Dr. Smith",
    specialization: "Cardiologist",
    slots: ["10:00 AM", "11:00 AM", "12:00 PM"],
  },
  {
    id: 2,
    name: "Dr. Johnson",
    specialization: "Neurologist",
    slots: ["1:00 PM", "2:00 PM", "3:00 PM"],
  },
  {
    id: 3,
    name: "Dr. Suresh",
    specialization: "Neurologist",
    slots: ["10:00 PM", "2:00 PM", "3:30 PM"],
  },
  {
    id: 4,
    name: "Dr. Williams",
    specialization: "Psychology",
    slots: ["11:00 PM", "12:30 PM", "3:00 PM"],
  },
];

// PATIENTS DATA
const patients = [
  {
    id: 1,
    name: "John Doe",
    disease: "Fever",
    assignedDoctorId: 1,
    slot: "10:00 AM",
  },
  {
    id: 2,
    name: "Sarah Smith",
    disease: "Heart Problem",
    assignedDoctorId: 1,
    slot: "11:00 AM",
  },
  {
    id: 3,
    name: "Mike Johnson",
    disease: "Migraine",
    assignedDoctorId: 2,
    slot: "2:00 PM",
  },
  {
    id: 4,
    name: "Noor Jahan",
    disease: "Severe Headache",
    assignedDoctorId: 3,
    slot: "2:00 PM",
  },
];

// DISPLAY SCHEDULE
console.log("\n HOSPITAL APPOINTMENT SYSTEM");
patients.forEach((patient) => {
  const doctor = doctors.find((d) => d.id === patient.assignedDoctorId);

  console.log(
    `Patient: ${patient.name} | Disease: ${patient.disease} | Doctor: ${doctor.name} (${doctor.specialization}) | Slot: ${patient.slot}`
  );
});

// CHECK IF SLOT EXISTS IN DOCTOR SCHEDULE
function isValidSlot(doctorId, slot) {
  const doctor = doctors.find((d) => d.id === doctorId);
  return doctor.slots.includes(slot);
}

// CHECK IF SLOT IS ALREADY BOOKED
function isSlotAvailable(doctorId, slot) {
  return !patients.some(
    (p) => p.assignedDoctorId === doctorId && p.slot === slot
  );
}

// BOOK APPOINTMENT FUNCTION (MAIN FEATURE)
function bookAppointment(name, disease, doctorId, slot) {
  const doctor = doctors.find((d) => d.id === doctorId);

//   new booking
  const newPatient = {
    id: patients.length + 1,
    name,
    disease,
    assignedDoctorId: doctorId,
    slot,
  };

  patients.push(newPatient);

  console.log(" Appointment booked successfully!");
  console.log(
    ` ${name} booked with ${doctor.name} at ${slot}`
  );
  
// if doctor not avl
  if (!doctor) {
    console.log(" Doctor not found");
    return;
  }

  //  inValidate slot belongs to doctor
  if (!isValidSlot(doctorId, slot)) {
    console.log(" Invalid slot for this doctor");
    return;
  }

  //  Check availability
  if (!isSlotAvailable(doctorId, slot)) {
    console.log(" Slot already booked");
    return;
  }

}


// TEST BOOKING
console.log("\n BOOKING TEST");
console.log("----------------");

bookAppointment("Rahul", "Fever", 1, "12:00 PM");
bookAppointment("Amit", "Cold", 1, "10:00 AM");   
bookAppointment("Sara", "Pain", 3, "1:00 PM");   