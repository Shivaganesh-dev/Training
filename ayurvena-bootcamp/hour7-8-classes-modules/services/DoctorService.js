const doctors = [];

function addDoctor(doctor) {
  doctors.push(doctor);
}

function getDoctors() {
  return doctors;
}

module.exports = { addDoctor, getDoctors };