/**
 * Email Service using EmailJS
 * Sends booking confirmation emails to customers and notifications to salon owner
 *
 * Setup Instructions:
 * 1. Go to https://www.emailjs.com/
 * 2. Create a free account
 * 3. Add an email service (Gmail, Outlook, etc.)
 * 4. Create two email templates:
 *    - Template 1: Customer confirmation email
 *    - Template 2: Owner notification email
 * 5. Get your credentials and add them to .env file
 */

import emailjs from '@emailjs/browser';

// EmailJS configuration
// In production, these should come from environment variables
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  customerTemplateId: import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID || 'YOUR_CUSTOMER_TEMPLATE_ID',
  ownerTemplateId: import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID || 'YOUR_OWNER_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  ownerEmail: import.meta.env.VITE_OWNER_EMAIL || 'hello@hmadi.salon'
};

/**
 * Initialize EmailJS with public key
 */
const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};

/**
 * Send confirmation email to customer
 * @param {Object} appointmentData - Appointment details
 * @returns {Promise<Object>} - Email send result
 */
export const sendCustomerConfirmation = async (appointmentData) => {
  // Check if EmailJS is configured
  if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
    console.warn('EmailJS not configured. Email not sent.');
    return {
      success: false,
      error: 'Email service not configured',
      message: 'Please configure EmailJS to send emails'
    };
  }

  initEmailJS();

  const templateParams = {
    to_email: appointmentData.email,
    customer_name: appointmentData.name,
    service: appointmentData.service,
    date: new Date(appointmentData.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    time: appointmentData.time,
    stylist: appointmentData.stylist || 'No preference',
    notes: appointmentData.notes || 'None',
    phone: appointmentData.phone,
    salon_name: 'HMADI',
    salon_phone: '+1 (555) 123-4567',
    salon_address: 'Av. Inspiración 123, Centro'
  };

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.customerTemplateId,
      templateParams
    );

    console.log('Customer confirmation email sent:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending customer confirmation:', error);
    return {
      success: false,
      error: error.text || error.message,
      message: 'Failed to send confirmation email'
    };
  }
};

/**
 * Send notification email to salon owner
 * @param {Object} appointmentData - Appointment details
 * @returns {Promise<Object>} - Email send result
 */
export const sendOwnerNotification = async (appointmentData) => {
  // Check if EmailJS is configured
  if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
    console.warn('EmailJS not configured. Email not sent.');
    return {
      success: false,
      error: 'Email service not configured',
      message: 'Please configure EmailJS to send emails'
    };
  }

  initEmailJS();

  const templateParams = {
    to_email: EMAILJS_CONFIG.ownerEmail,
    customer_name: appointmentData.name,
    customer_email: appointmentData.email,
    customer_phone: appointmentData.phone,
    service: appointmentData.service,
    date: new Date(appointmentData.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    time: appointmentData.time,
    stylist: appointmentData.stylist || 'No preference',
    notes: appointmentData.notes || 'None',
    booking_time: new Date().toLocaleString()
  };

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.ownerTemplateId,
      templateParams
    );

    console.log('Owner notification email sent:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending owner notification:', error);
    return {
      success: false,
      error: error.text || error.message,
      message: 'Failed to send notification email'
    };
  }
};

/**
 * Send both customer confirmation and owner notification
 * @param {Object} appointmentData - Appointment details
 * @returns {Promise<Object>} - Combined email send result
 */
export const sendBookingEmails = async (appointmentData) => {
  const results = await Promise.allSettled([
    sendCustomerConfirmation(appointmentData),
    sendOwnerNotification(appointmentData)
  ]);

  const [customerResult, ownerResult] = results;

  return {
    customer: customerResult.status === 'fulfilled' ? customerResult.value : { success: false, error: customerResult.reason },
    owner: ownerResult.status === 'fulfilled' ? ownerResult.value : { success: false, error: ownerResult.reason },
    allSuccess: customerResult.status === 'fulfilled' && customerResult.value.success &&
                ownerResult.status === 'fulfilled' && ownerResult.value.success
  };
};
