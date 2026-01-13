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
          <h1>Reserva tu Cita</h1>
          <p>Reserva tu momento de autocuidado</p>
        </div>
      </section>

      {/* Booking Information */}
      <section className="section">
        <div className="container">
          <div className="booking-intro">
            <h2>Qué Esperar</h2>
            <div className="booking-steps">
              <div className="booking-step">
                <div className="step-number">1</div>
                <h3>Llena el Formulario</h3>
                <p>Cuéntanos sobre el servicio que te gustaría y tu fecha y hora preferida.</p>
              </div>
              <div className="booking-step">
                <div className="step-number">2</div>
                <h3>Confirmaremos</h3>
                <p>Nuestro equipo se pondrá en contacto por correo o teléfono para confirmar tu cita.</p>
              </div>
              <div className="booking-step">
                <div className="step-number">3</div>
                <h3>Disfruta tu Visita</h3>
                <p>Llega y relájate. Nos encargaremos de todo, ¡incluyendo café de cortesía!</p>
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
            <h3>Política de Cancelación</h3>
            <p>
              Entendemos que los planes cambian. Por favor avísanos con al menos 24 horas de anticipación si necesitas
              reprogramar o cancelar tu cita. Esto nos permite acomodar a otros clientes.
              ¡Gracias por tu comprensión!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
