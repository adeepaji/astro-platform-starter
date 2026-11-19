# BF GYM Global — UK-based international coaching launch checklist

**Status: development draft. Not evidence of immigration, tax, or regulatory clearance.**

## Actual operating model
- Owner currently lives in the United Kingdom and intends to personally deliver live fitness training online.
- Global clientele may include India, the UK, Europe and other countries.
- A .com or .in website, Indian language, Indian marketing or INR display **does not** make the business operate outside the UK for legal, immigration or tax purposes.
- Do not claim Indian incorporation, Indian business premises, India-based training delivery, or Indian tax residence unless those are factual and independently confirmed.

## Immigration — do this first
Read https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-skilled-worker (condition SW 36.3).
- Dependant partners generally may work, including self-employment, **except** as professional sportspersons (including sports coaches).
- The official occupation list distinguishes SOC 3433 fitness and wellbeing instructors / personal trainers from SOC 3432 sports coaches. The code is not, by itself, a legal clearance.
- Obtain **written advice from an appropriately regulated UK immigration professional** about your exact programme duties and whether the activity is permitted, particularly if sport-specific or elite athlete coaching is involved.
- Save the adviser’s conclusions and keep descriptions of services accurate for any future immigration application.
- Being unpaid or based on an Indian website is not necessarily a safe workaround for prohibited activity.

## Business / tax structure — subject to professional checks
- If legal advice confirms the coaching is permitted, starting as a UK sole trader may be simplest: https://www.gov.uk/become-sole-trader
- A UK company can be considered if there are good liability, partner or commercial reasons, with accountant advice.
- An India-incorporated company directed and controlled from the UK can have UK corporation tax residence or UK permanent-establishment issues, depending on facts and applicable treaty.
- UK tax residents are generally liable for income/profits from their trade even where customers pay from India or in INR: https://www.gov.uk/tax-foreign-income
- UK sole-trader Self Assessment registration is generally required when gross trading income exceeds £1,000 per UK tax year, subject to specific exceptions: https://www.gov.uk/become-sole-trader
- VAT registration ordinarily becomes compulsory once relevant taxable turnover exceeds £90,000 in the rolling 12-month period, or based on the forward-looking test: https://www.gov.uk/register-for-vat
- Live person-led video coaching versus automatically delivered digital memberships may have different VAT place-of-supply rules. EU and Indian consumer VAT/GST requirements need individual consideration: https://www.gov.uk/guidance/the-vat-rules-if-you-supply-digital-services-to-private-consumers
- Get a UK accountant familiar with international services; get Indian tax/GST advice if establishing a genuine Indian legal entity or taxable nexus.

## Pre-launch website switches (DEFAULT OFF)
Source: src/data/businessLaunch.ts
- PUBLIC_BF_ENABLE_PAID_SERVICES = true — enables approved GBP prices and valid Calendly / Stripe links.
- PUBLIC_BF_PRIVACY_NOTICE_APPROVED = true — when paid services are also enabled, allows pre-existing customer enquiry forms to render.
- Both variables default to false if omitted.

**These flags are technical safeguards, not substitutes for legal approval.** Do not set either to true until business activities, prices, subscriptions, insurance, cancellation terms, data protection notices, processing and cross-border tax obligations have been reviewed.

In pre-launch mode:
- Home and mobile app show **BF GYM Global**, a UK-operated brand planning worldwide online service.
- The website and mobile app display **OPENING SOON** instead of proposed GBP prices.
- Calendly booking and Stripe payment URLs are suppressed even if accidentally included in environment variables.
- The contact form on the homepage and booking form at /book/ do not render; neither route accepts customer contact details.
- The 64 curated YouTube videos and 418 movement searches are still available, as is the phone-local workout log.

## Online service design for a global audience
- Set up clearly time-zoned appointment slots in Europe/London, showing each customer's local timezone through the booking provider.
- Sell distinct services: private online fitness session, virtual group class with capacity limits, and remote online training plan/check-ins.
- Before enabling service sales, confirm actual session lengths, class capacity, cancellation window, refunds, subscription renewal policy, age requirements and fitness screening.
- Collect only essential enquiry data. Fitness questionnaires can involve **special-category health data**; use an adequately secured, appropriately lawful intake workflow separate from general enquiry forms.
- Choose a **real business entity / account country** for your payment provider; do not choose India just to bypass UK obligations.
- Stripe's India onboarding is currently invitation-only: https://support.stripe.com/questions/stripe-accounts-are-invite-only-in-india
- If eligible, use a UK payment provider account, appropriate tax reporting, secure hosted checkout and compatible cross-border card options.
- Do not advertise instant INR/USD/GBP prices unless you configure genuine presentment currencies, exchange/rounding rules, refunds and any applicable country tax charges.

## Publish in phases
1. Develop and test the free educational PWA and public workouts. Verify YouTube IDs, playback and privacy information.
2. Obtain immigration advice for the intended personally delivered online fitness services.
3. Select truthful business structure, complete tax/insurance/privacy/payment-provider setup.
4. Finalise terms and international checkout compliance (including consumer protection obligations).
5. Add your official legal business details and contact email to /privacy/ and other legal pages.
6. Enable PUBLIC_BF_ENABLE_PAID_SERVICES only after clear approval, and configure verified public Calendly links and hosted Stripe payment URLs.
7. Enable PUBLIC_BF_PRIVACY_NOTICE_APPROVED only when the actual published privacy notice is complete and accurate; test Netlify Forms if used.
8. Run GitHub Actions builds and browser acceptance tests. Merge draft PR and deploy to Netlify only when appropriate.

**This is a development checklist, not personalised legal or tax advice.**
