import { useState } from 'react'
import { validateBookingForm } from '../utils/validation'
import { saveAppointment } from '../utils/localStorage'
import { sendBookingEmails } from '../utils/emailService'
import config from '../config.json'
import './BookingForm.css'

/**
 * BookingForm Component
 * Comprehensive booking form with validation and localStorage persistence
 * TODO: Replace localStorage with actual API integration
 */
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    stylist: '',
    date: '',
    time: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Get all services for dropdown
  const allServices = config.services.flatMap(category =>
    category.items.map(item => ({
      value: item.name,
      label: `${item.name} (${item.price})`,
      category: category.category
    }))
  );

  // Stylists/technicians
  const stylists = config.team.map(member => ({
    value: member.name,
    label: `${member.name} - ${member.role}`
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validation = validateBookingForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to localStorage
      const result = saveAppointment(formData);

      if (result.success) {
        // Send confirmation emails (customer + owner)
        const emailResults = await sendBookingEmails(result.appointment);

        // Log email results for debugging
        if (emailResults.allSuccess) {
          console.log('✅ All emails sent successfully');
        } else {
          console.warn('⚠️ Some emails failed to send:', emailResults);
        }

        setSubmittedData(result.appointment);
        setShowModal(true);

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          stylist: '',
          date: '',
          time: '',
          notes: ''
        });
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      // Still show confirmation even if emails fail
      // The booking is saved locally
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmittedData(null);
  };

  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        {/* Personal Information */}
        <div className="form-section">
          <h3 className="form-section-title">Personal Information</h3>

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-input ${errors.phone ? 'error' : ''}`}
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />
              {errors.phone && <p className="form-error">{errors.phone}</p>}
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="form-section">
          <h3 className="form-section-title">Service Details</h3>

          <div className="form-group">
            <label htmlFor="service" className="form-label">
              Select Service <span className="required">*</span>
            </label>
            <select
              id="service"
              name="service"
              className={`form-select ${errors.service ? 'error' : ''}`}
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Choose a service...</option>
              {config.services.map(category => (
                <optgroup key={category.id} label={category.category}>
                  {category.items.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name} - {item.price}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {errors.service && <p className="form-error">{errors.service}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="stylist" className="form-label">
              Preferred Stylist/Technician (Optional)
            </label>
            <select
              id="stylist"
              name="stylist"
              className="form-select"
              value={formData.stylist}
              onChange={handleChange}
            >
              <option value="">No preference</option>
              {stylists.map((stylist, index) => (
                <option key={index} value={stylist.value}>
                  {stylist.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Appointment Time */}
        <div className="form-section">
          <h3 className="form-section-title">Preferred Date & Time</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Date <span className="required">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className={`form-input ${errors.date ? 'error' : ''}`}
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.date && <p className="form-error">{errors.date}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="time" className="form-label">
                Time <span className="required">*</span>
              </label>
              <select
                id="time"
                name="time"
                className={`form-select ${errors.time ? 'error' : ''}`}
                value={formData.time}
                onChange={handleChange}
              >
                <option value="">Select a time...</option>
                <option value="10:00">10:00 AM</option>
                <option value="10:30">10:30 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="11:30">11:30 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="12:30">12:30 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="13:30">1:30 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="14:30">2:30 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="15:30">3:30 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="16:30">4:30 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
              </select>
              {errors.time && <p className="form-error">{errors.time}</p>}
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="notes" className="form-label">
              Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              className="form-textarea"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special requests or information we should know..."
              rows="4"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary btn-large"
          disabled={isSubmitting}
          style={{ width: '100%' }}
        >
          {isSubmitting ? 'Submitting...' : 'Book Appointment'}
        </button>

        <p className="form-note">
          * Required fields. We'll contact you shortly to confirm your appointment.
        </p>
      </form>

      {/* Confirmation Modal */}
      {showModal && submittedData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="modal-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2>Booking Received!</h2>
            <p>
              Thanks, <strong>{submittedData.name}</strong>! We've tentatively reserved your slot for:
            </p>
            <div className="booking-details">
              <p><strong>Service:</strong> {submittedData.service}</p>
              <p><strong>Date:</strong> {new Date(submittedData.date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {submittedData.time}</p>
              {submittedData.stylist && <p><strong>With:</strong> {submittedData.stylist}</p>}
            </div>
            <p className="modal-note">
              We'll contact you shortly at <strong>{submittedData.email}</strong> to confirm your appointment.
            </p>
            <button className="btn btn-primary" onClick={closeModal}>
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingForm;
