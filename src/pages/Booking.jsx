import BookingForm from '../components/BookingForm'
import './Booking.css'

/**
 * Booking Page
 * Appointment booking page with form
 */
const Booking = () => {
  return (
    <div className="booking-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Book Your Appointment</h1>
          <p>Reserve your moment of self-care</p>
        </div>
      </section>

      {/* Booking Information */}
      <section className="section">
        <div className="container">
          <div className="booking-intro">
            <h2>What to Expect</h2>
            <div className="booking-steps">
              <div className="booking-step">
                <div className="step-number">1</div>
                <h3>Fill Out the Form</h3>
                <p>Tell us about the service you'd like and your preferred date and time.</p>
              </div>
              <div className="booking-step">
                <div className="step-number">2</div>
                <h3>We'll Confirm</h3>
                <p>Our team will reach out via email or phone to confirm your appointment.</p>
              </div>
              <div className="booking-step">
                <div className="step-number">3</div>
                <h3>Enjoy Your Visit</h3>
                <p>Arrive and relax. We'll take care of everything, including complimentary coffee!</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <BookingForm />
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="section booking-policy">
        <div className="container">
          <div className="policy-box">
            <h3>Cancellation Policy</h3>
            <p>
              We understand plans change. Please give us at least 24 hours notice if you need
              to reschedule or cancel your appointment. This allows us to accommodate other guests.
              Thank you for your understanding!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
