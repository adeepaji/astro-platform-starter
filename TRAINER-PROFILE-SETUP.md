# BF GYM Global — trainer profile publishing guide

## Trainer profile

The live route is /trainer/. Display name is Coach Adeep / Adeep Aji.

The biography is based on the trainer CV supplied by the owner: more than five years of personal training and small-group experience in India. The site remains a free fitness education project, with no active paid coaching or payments.

## Photographs: owner action required

No clearly identifiable, unedited original trainer photos were available among the accessible files, so the page uses branded initials and photo placeholders instead of fabricating a portrait.

To replace them with owner-approved real photographs:
1. Choose an original professional portrait and optionally one training-action and one coaching-action photograph.
2. Strip EXIF GPS and other private metadata. Get consent from any other identifiable people.
3. Upload web-optimised originals to the public GitHub project under: public/images/trainer/
4. Suggested filenames: adeep-portrait.webp, adeep-training.webp, adeep-coaching.webp
5. Add these *public build* environment variables in Netlify:
   PUBLIC_BF_TRAINER_PHOTO=/images/trainer/adeep-portrait.webp
   PUBLIC_BF_TRAINING_PHOTO=/images/trainer/adeep-training.webp
   PUBLIC_BF_CLASS_PHOTO=/images/trainer/adeep-coaching.webp
6. Redeploy and inspect crops on mobile and desktop.

The URL restrictions are configured in src/data/trainerProfile.ts. Only simple paths under /images/trainer/ are accepted. Never upload private image originals or identification documents to a public repository.

## Certificates: independent verification pending

Reported educational background from earlier CV and conversations:
- Diploma in Personal Training (K11 School of Fitness Sciences, India)
- Level 4 Personal Trainer (precise awarding and registration details unconfirmed)
- Advanced Personal Training
- Female Fitness Training
- Special Population Fitness Training
- CPR & AED Training (current validity unconfirmed)

The precise certificate titles, awarding organisations and dates require original documentary evidence and, where possible, checking with the awarding body. A CV alone is not independent verification.

Privately send photographs/scans of the real certificates or authoritative verification URLs. Do not commit unredacted certificates, identifying numbers, home addresses or other private personal data to GitHub. Only change the site to say "verified" after actual independent checking; never claim current CPR status without confirmation.

## Business launch controls unchanged

The site remains in pre-launch mode by default. Source: src/data/businessLaunch.ts. Paid services and customer enquiry forms remain disabled. The coach profile does not grant immigration, legal or tax permission to commence paid coaching.

