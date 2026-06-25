const PatientService = require("./PatientService");
const DoctorService = require("./DoctorService");
const AppointmentService = require("./AppointmentService");

class DashboardService {
  showSummary() {
    return {
      totalPatients: PatientService.getAllPatients().length,
      totalDoctors: DoctorService.getAllDoctors().length,
      totalAppointments: AppointmentService.getAllAppointments().length,
    };
  }
}

module.exports = new DashboardService();