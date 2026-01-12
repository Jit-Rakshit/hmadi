/**
 * Form validation utilities
 * Client-side validation for booking form and contact forms
 */

/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates phone number format
 * Accepts: (555) 123-4567, 555-123-4567, 5551234567
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone format
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-\(\)]+$/;
  const digitsOnly = phone.replace(/\D/g, '');
  return phoneRegex.test(phone) && digitsOnly.length >= 10;
};

/**
 * Validates date is in the future
 * @param {string} dateString - Date string to validate
 * @returns {boolean} - True if date is in the future
 */
export const validateFutureDate = (dateString) => {
  const selectedDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
};

/**
 * Validates required field is not empty
 * @param {string} value - Field value to validate
 * @returns {boolean} - True if not empty
 */
export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Validates booking form data
 * @param {Object} formData - Form data object
 * @returns {Object} - Validation result with isValid flag and errors object
 */
export const validateBookingForm = (formData) => {
  const errors = {};

  // Name validation
  if (!validateRequired(formData.name)) {
    errors.name = 'El nombre es requerido';
  }

  // Email validation
  if (!validateRequired(formData.email)) {
    errors.email = 'El correo electrónico es requerido';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Por favor ingresa un correo electrónico válido';
  }

  // Phone validation
  if (!validateRequired(formData.phone)) {
    errors.phone = 'El número de teléfono es requerido';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Por favor ingresa un número de teléfono válido (mínimo 10 dígitos)';
  }

  // Service validation
  if (!validateRequired(formData.service)) {
    errors.service = 'Por favor selecciona un servicio';
  }

  // Date validation
  if (!validateRequired(formData.date)) {
    errors.date = 'La fecha es requerida';
  } else if (!validateFutureDate(formData.date)) {
    errors.date = 'Por favor selecciona una fecha futura';
  }

  // Time validation
  if (!validateRequired(formData.time)) {
    errors.time = 'La hora es requerida';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Formats phone number for display
 * @param {string} phone - Raw phone number
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length === 10) {
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  }
  return phone;
};
