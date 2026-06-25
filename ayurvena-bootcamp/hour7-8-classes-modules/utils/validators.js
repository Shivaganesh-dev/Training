function isValidSlot(doctor, slot) {
  return doctor.slots.includes(slot);
}

module.exports = { isValidSlot };