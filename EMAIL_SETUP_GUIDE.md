# Email Notification Setup Guide

This guide will help you set up email notifications for the HMADI salon booking system using EmailJS.

## Why EmailJS?

- ✅ **Free tier**: 200 emails/month for free
- ✅ **No backend required**: Works with static sites (GitHub Pages)
- ✅ **Easy setup**: 10-15 minutes to configure
- ✅ **Reliable**: Professional email delivery

---

## Step-by-Step Setup

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (free account)
3. Verify your email address

### 2. Add Email Service

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal)
   - **Outlook/Office365**
   - Or any other supported service
4. Click **"Connect Account"**
5. Follow the authorization steps
6. **Copy your Service ID** - you'll need this later

### 3. Create Customer Confirmation Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Template Name: `Booking Confirmation - Customer`
4. Use this email template:

```
Subject: Booking Confirmation - {{salon_name}}

Hi {{customer_name}},

Thank you for booking with {{salon_name}}! We're excited to see you.

📅 APPOINTMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service:     {{service}}
Date:        {{date}}
Time:        {{time}}
Stylist:     {{stylist}}

{{#notes}}
Special Notes: {{notes}}
{{/notes}}

📍 LOCATION
{{salon_address}}

📞 CONTACT
Phone: {{salon_phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you need to reschedule or cancel, please call us at {{salon_phone}} at least 24 hours in advance.

We look forward to pampering you!

Best regards,
The {{salon_name}} Team

---
This is an automated confirmation email. Please do not reply to this email.
```

5. Click **"Save"**
6. **Copy the Template ID**

### 4. Create Owner Notification Email Template

1. Click **"Create New Template"** again
2. Template Name: `New Booking Notification - Owner`
3. Use this email template:

```
Subject: 🔔 New Booking - {{customer_name}}

NEW APPOINTMENT BOOKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 APPOINTMENT DETAILS
Customer:    {{customer_name}}
Email:       {{customer_email}}
Phone:       {{customer_phone}}

Service:     {{service}}
Date:        {{date}}
Time:        {{time}}
Stylist:     {{stylist}}

{{#notes}}
Notes from Customer:
{{notes}}
{{/notes}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Booked at: {{booking_time}}

ACTION REQUIRED:
Please contact the customer to confirm the appointment.

---
This notification was sent automatically from your website.
```

4. Click **"Save"**
5. **Copy the Template ID**

### 5. Get Your Public Key

1. Go to **"Account"** (top right)
2. Click **"API Keys"**
3. **Copy your Public Key**

### 6. Configure Your Project

1. In your project folder, create a file named `.env` (copy from `.env.example`):

```bash
cp .env.example .env
```

2. Open `.env` and fill in your credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_CUSTOMER_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_OWNER_TEMPLATE_ID=template_yyyyyyy
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
VITE_OWNER_EMAIL=deisy@hmadisalon.com
```

3. **Important**: Add `.env` to your `.gitignore` (already done)

### 7. Test It Out

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to http://localhost:3000/booking

3. Fill out the booking form with a test appointment

4. Check:
   - ✅ Customer email inbox (for confirmation)
   - ✅ Owner email inbox (for notification)

### 8. Deploy to GitHub Pages

1. Build and deploy:
   ```bash
   npm run deploy
   ```

2. **Important**: GitHub Pages doesn't support `.env` files directly. You need to:
   - Set the environment variables in your build process, OR
   - Use GitHub Secrets, OR
   - For simple setup: Hardcode the values in `src/utils/emailService.js` (less secure but works)

---

## Email Template Variables

You can use these variables in your email templates:

### Customer Confirmation Template:
- `{{to_email}}` - Customer's email
- `{{customer_name}}` - Customer's full name
- `{{service}}` - Booked service
- `{{date}}` - Appointment date (formatted)
- `{{time}}` - Appointment time
- `{{stylist}}` - Preferred stylist
- `{{notes}}` - Customer notes
- `{{phone}}` - Customer phone
- `{{salon_name}}` - "HMADI"
- `{{salon_phone}}` - Salon contact number
- `{{salon_address}}` - Salon address

### Owner Notification Template:
- `{{to_email}}` - Owner's email
- `{{customer_name}}` - Customer's full name
- `{{customer_email}}` - Customer's email
- `{{customer_phone}}` - Customer's phone
- `{{service}}` - Booked service
- `{{date}}` - Appointment date
- `{{time}}` - Appointment time
- `{{stylist}}` - Preferred stylist
- `{{notes}}` - Customer notes
- `{{booking_time}}` - When booking was made

---

## Troubleshooting

### Emails not sending?

1. **Check browser console** for error messages
2. **Verify credentials** in `.env` file
3. **Check EmailJS dashboard** for:
   - Service status (should be active)
   - Template status (should be saved)
   - Recent activity log
4. **Email limits**: Free tier = 200 emails/month

### Customer not receiving emails?

- Check spam/junk folder
- Verify email address is correct
- Check EmailJS activity log

### Owner not receiving notifications?

- Update `VITE_OWNER_EMAIL` in `.env`
- Check spam folder
- Verify owner template is correctly configured

---

## Cost & Limits

**Free Tier:**
- 200 emails/month
- 2 email templates
- All features included

**Paid Plans:**
- Start at $10/month for 1,000 emails
- See [EmailJS Pricing](https://www.emailjs.com/pricing/)

---

## Security Notes

- ✅ `.env` file is in `.gitignore` (credentials not exposed)
- ✅ Public key is safe to expose (it's meant to be public)
- ✅ EmailJS handles email sending securely
- ⚠️ For production, consider using environment variables in your CI/CD

---

## Next Steps

Once email is working:
1. Customize the email templates with your branding
2. Test with real appointments
3. Monitor the EmailJS dashboard for delivery status
4. Consider upgrading if you exceed 200 emails/month

**Need help?** Check [EmailJS Documentation](https://www.emailjs.com/docs/)
