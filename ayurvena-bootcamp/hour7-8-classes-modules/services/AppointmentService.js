const appointments = [];

function bookAppointment(patientId, doctorId, slot) {
  const appointment = {
    id: appointments.length + 1,
    patientId,
    doctorId,
    slot,
  };

  appointments.push(appointment);
  return appointment;
}

function getAppointments() {
  return appointments;
}

module.exports = { bookAppointment, getAppointments };