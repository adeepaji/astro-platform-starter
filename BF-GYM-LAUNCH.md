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
