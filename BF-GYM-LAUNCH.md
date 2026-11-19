# BF GYM website launch draft

A responsive fitness coaching website built with Astro, based on the existing Astro + Netlify starter.

## What's included
- Branded BF GYM landing page with three potential coaching programmes
- Accessible mobile-responsive design
- Coaching enquiry form using Netlify Forms
- Thank-you page at /thanks/
- Custom BF GYM browser icon

## Before publishing
1. Confirm the BF GYM name and whether you will actually offer 1:1, small-group and online coaching.
2. Confirm your business/trainer contact details, session location(s), availability and prices. Nothing on this starter represents a confirmed booking or payment.
3. Add your real trainer photo and only qualifications you wish to advertise; verify any professional claims.
4. Prepare a privacy notice and the appropriate UK client / business documentation for collecting enquiries.
5. Configure Netlify Forms and test an actual submission on the published site. Set up form notifications so you don't miss leads.
6. When ready to take payments, create your own account with a provider such as Stripe and connect verified payment links or a booking tool. Do not put payment keys in GitHub.

## Deploy with Netlify
1. Merge this branch's pull request into main after review.
2. Go to https://app.netlify.com and choose **Add new project** > **Import a Git repository**.
3. Authorise access to GitHub and select **adeepaji/astro-platform-starter**.
4. Use build command \`npm run build\` and follow the Astro/Netlify detection defaults.
5. Click **Publish**. Enable Netlify form detection (Project configuration > Forms if needed) and perform an enquiry test.
6. Optionally add a custom domain and HTTPS via Netlify domain settings.

Netlify and GitHub accounts, payments and any legal/business disclosures belong to the owner. No production website has been published by this draft alone.

## Development
\`\`\`sh
npm install
npm run dev
npm run build
\`\`\`


## Pricing, booking and payments (added for launch)

**PROPOSED launch prices, not approved for public sale**
- One-to-one personal training: GBP 50 per 60-minute session.
- Small group fitness: GBP 12 per person per 45-minute class.
- Online coaching: GBP 89/month, subject to approved subscription terms.

Edit the single pricing source at src/data/services.ts. Before publishing, confirm the services, exact session length, inclusions, location, class capacity, group timetable, package and subscription terms.

### Calendly booking setup

1. Sign up to https://calendly.com using your business account and connect your actual calendar.
2. Create three event types: Personal Training (60 mins), Group Fitness (45 mins, with correctly configured capacity) and Online Consultation (with an agreed duration).
3. Set business hours, availability, buffers, location, booking/cancellation rules and timezone.
4. To accept payment at booking, use a Calendly plan supporting Stripe payments, connect your own Stripe account and set the agreed price on each paid event.
5. Copy the public HTTPS Calendly event URLs and add these PUBLIC build environment variables in Netlify:
   - PUBLIC_BF_CALENDLY_PERSONAL = your actual personal training booking URL
   - PUBLIC_BF_CALENDLY_GROUP = your actual group event URL
   - PUBLIC_BF_CALENDLY_ONLINE = your actual online event URL
6. Redeploy. Each corresponding price card will then link to the actual Calendly event. Until configured, customers can send a booking request using /book/. This is NOT an appointment confirmation.

### Stripe payment setup

1. Open https://dashboard.stripe.com, verify your account and connect your payout bank account.
2. If you approve the GBP 89/month online subscription, create a recurring Online Coaching product with agreed service description, renewal terms, refunds and cancellation policy.
3. Generate a Stripe Payment Link and copy its live buy.stripe.com URL (not a secret key).
4. Add the public Netlify build environment variable PUBLIC_BF_STRIPE_ONLINE = your live Stripe payment link.
5. Redeploy. The Online Coaching price card will show START ONLINE SUBSCRIPTION only when its valid public link exists.
6. Test the live prices, currency, receipts, customer email, renewal/cancellation workflow and onboarding. For in-person paid sessions, use paid Calendly events, not a standalone early-charge link.

**Never put payment secret keys, customer data or bank credentials in your public GitHub repo.** The website only accepts HTTPS Calendly booking URLs and HTTPS Stripe checkout links for these features.

### Booking forms and confirmations

The existing homepage enquiry form is named bf-gym-enquiries. The new /book/ form is named bf-gym-booking. Both use Netlify Forms, with the acknowledgement page /thanks/.
- Turn on Netlify Forms detection before deploying, then test submitting each form on the hosted website.
- Set up notifications for new enquiries. A form submission does not automatically confirm availability, send a calendar invitation or collect money.
- No customer health history or other sensitive details should go into these general enquiry forms.

### Netlify publication workflow

1. Review the GitHub draft PR with service details, contact information and policies.
2. Merge only after you approve the business content.
3. At https://app.netlify.com choose Add new project > Import existing project > GitHub > adeepaji/astro-platform-starter.
4. Set build command npm run build, follow Astro/Netlify deploy defaults, and set Node 22 if required.
5. Configure public environment variables above (if you already have the links), then deploy.
6. In Forms, enable form detection; redeploy as necessary. Verify submission records and email notifications.
7. Check the live site, mobile display, session requests, external booking, and any enabled payments before promotion.
8. Add a purchased domain if desired, confirm HTTPS and make a test booking through the customer journey.

### Before taking clients or payments

- The /privacy/ page is a provisional draft. Replace it with the correct business/operator identity, contact email, lawful basis, retention, vendor disclosures, rights and other UK privacy requirements.
- Set accurate booking terms, cancellations, refunds and subscriptions. Obtain appropriate business insurance and any venue permissions.
- Check any relevant work/immigration restrictions and self-employment tax requirements. Don't accept paid orders until you can provide the advertised services.

The website is not automatically published by a GitHub commit or pull request.


## BF GYM mobile app — installable PWA

The first app version is built into this Astro repository at **/app/**. It is a **Progressive Web App (PWA)**, not yet an Apple App Store or Google Play Store listing.

### Included in the mobile app
- Full-screen, phone-first home, coaching plans and proposed GBP pricing
- Request-session buttons that use the existing booking enquiry forms until your own Calendly event links are configured
- Online subscription button appears **only when** a valid public Stripe link is configured
- Simple personal workout logger (daily check-off, this-week count, current streak)
- Workout log lives in **localStorage on the visitor's device**; it is not synced across devices or shared with BF GYM
- Group fitness calendar is clearly labelled **COMING SOON** until real timetables and venues exist
- PWA install manifest, service worker, offline notice, 192px and 512px PNG icons
- Website links to /app/ to promote installation

### Install after the site is published with HTTPS

**iPhone:** Open the live URL ending in /app/ in Safari. Tap **Share** > **Add to Home Screen**, choose **Add**, then open the BF GYM icon.

**Android:** Open /app/ in Chrome. In the browser menu choose **Install app** or **Add to Home screen** if offered. After installation, open the BF GYM icon.

The mobile site still works in a normal browser when installation is unavailable. Payment/booking links need a working internet connection. The workout log should not be used as official proof of booked or paid sessions.

### Further development for a native app or member portal

To publish a downloadable iOS or Android **store app**, this PWA needs further packaging/native development and acceptance through Apple / Google app review. A simple web wrapper may not meet store-quality requirements. An official native build could use a cross-platform framework such as React Native / Expo or Capacitor, with dedicated testing on devices.

For automatic paid membership and bookings within the app, add a secure backend, member authentication, booking-provider API integrations, terms and privacy controls. Payment handling must follow the relevant store billing policies when applicable. No backend login, live calendars, push notifications or subscription management is claimed in this version.

### To-do before business launch

- Verify business activities are permitted under your own immigration/work conditions. The restriction around professional sports coaching warrants an immigration adviser assessment.
- Finalise privacy notice, client terms, cancellation/refund policies, insurance, trainer verification and payment terms.
- Approve all listed plans and proposed prices. Don't collect payments until the actual product/service terms are clear.
- Test the Netlify deployment and live form delivery before advertising the new app.
