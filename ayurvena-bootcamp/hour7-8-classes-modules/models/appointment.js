class Appointment {
  constructor(id, patientId, doctorId, slot) {
    this.id = id;
    this.patientId = patientId;
    this.doctorId = doctorId;
    this.slot = slot;
  }
}

module.exports = Appointment;