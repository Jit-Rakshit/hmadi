/**
 * LocalStorage utilities for managing appointments
 * Provides a simple demo backend using browser localStorage
 *
 * TODO: Replace with actual API calls when backend is ready
 * - POST /api/appointments (create appointment)
 * - GET /api/appointments (fetch appointments)
 * - PUT /api/appointments/:id (update appointment)
 * - DELETE /api/appointments/:id (cancel appointment)
 */

const STORAGE_KEY = 'hmadi_appointments';

/**
 * Saves an appointment to localStorage
 * @param {Object} appointmentData - Appointment details
 * @returns {Object} - Saved appointment with ID and timestamp
 */
export const saveAppointment = (appointmentData) => {
  const appointments = getAppointments();

  const newAppointment = {
    id: Date.now().toString(),
    ...appointmentData,
    createdAt: new Date().toISOString(),
    status: 'pending' // pending, confirmed, cancelled
  };

  appointments.push(newAppointment);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
    return { success: true, appointment: newAppointment };
  } catch (error) {
    console.error('Error saving appointment:', error);
    return { success: false, error: 'Failed to save appointment' };
  }

  // TODO: Replace with API call
  // const response = await fetch('/api/appointments', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(appointmentData)
  // });
  // return await response.json();
};

/**
 * Retrieves all appointments from localStorage
 * @returns {Array} - Array of appointment objects
 */
export const getAppointments = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error retrieving appointments:', error);
    return [];
  }

  // TODO: Replace with API call
  // const response = await fetch('/api/appointments');
  // return await response.json();
};

/**
 * Retrieves a single appointment by ID
 * @param {string} id - Appointment ID
 * @returns {Object|null} - Appointment object or null if not found
 */
export const getAppointmentById = (id) => {
  const appointments = getAppointments();
  return appointments.find(apt => apt.id === id) || null;
};

/**
 * Updates an existing appointment
 * @param {string} id - Appointment ID
 * @param {Object} updates - Updated fields
 * @returns {Object} - Update result
 */
export const updateAppointment = (id, updates) => {
  const appointments = getAppointments();
  const index = appointments.findIndex(apt => apt.id === id);

  if (index === -1) {
    return { success: false, error: 'Appointment not found' };
  }

  appointments[index] = {
    ...appointments[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
    return { success: true, appointment: appointments[index] };
  } catch (error) {
    console.error('Error updating appointment:', error);
    return { success: false, error: 'Failed to update appointment' };
  }
};

/**
 * Deletes an appointment
 * @param {string} id - Appointment ID
 * @returns {Object} - Deletion result
 */
export const deleteAppointment = (id) => {
  const appointments = getAppointments();
  const filtered = appointments.filter(apt => apt.id !== id);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return { success: true };
  } catch (error) {
    console.error('Error deleting appointment:', error);
    return { success: false, error: 'Failed to delete appointment' };
  }
};

/**
 * Clears all appointments (for testing/demo purposes)
 */
export const clearAllAppointments = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return { success: true };
  } catch (error) {
    console.error('Error clearing appointments:', error);
    return { success: false, error: 'Failed to clear appointments' };
  }
};
