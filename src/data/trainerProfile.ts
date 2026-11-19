// BF GYM Global coach content.
// The profile facts below were supplied by the owner in earlier fitness CV material.
// Document-level verification has NOT been performed; do not claim independently
// verified qualifications, current CPR validity or regulatory accreditation.
export const trainer = {
  name: 'Adeep Aji',
  displayName: 'Coach Adeep',
  experience: '5+ years',
  location: 'Based in the United Kingdom',
  previousExperience: 'Personal training and small-group fitness instruction in India',
  specialisms: [
    'Strength & conditioning',
    'Functional training',
    'Body composition goals',
    'Beginner-friendly fitness',
    'Group exercise & HIIT',
    'Sustainable training habits',
  ],
  // Only paths under /images/trainer/ are accepted. Keep originals private
  // until the owner supplies the precise photos they approve for publication.
  photos: [
    {type:'portrait', label:'Trainer portrait', alt:'Portrait of fitness trainer Adeep Aji', url: safePhoto(import.meta.env.PUBLIC_BF_TRAINER_PHOTO)},
    {type:'training', label:'Gym training', alt:'Adeep Aji demonstrating a fitness movement', url: safePhoto(import.meta.env.PUBLIC_BF_TRAINING_PHOTO)},
    {type:'class', label:'Coaching session', alt:'Adeep Aji leading a fitness session', url: safePhoto(import.meta.env.PUBLIC_BF_CLASS_PHOTO)},
  ],
  qualifications: [
    {title:'Diploma in Personal Training',body:'K11 School of Fitness Sciences, India (trainer-reported)'},
    {title:'Level 4 Personal Trainer',body:'Level stated in trainer CV; awarding and registration details to be confirmed'},
    {title:'Advanced Personal Training',body:'Gold’s Fitness Institute, India (trainer-reported)'},
    {title:'Female Fitness Training',body:'Gold’s Fitness Institute, India (trainer-reported)'},
    {title:'Special Population Fitness Training',body:'Gold’s Fitness Institute, India (trainer-reported)'},
    {title:'CPR & AED Training',body:'Australian lifesaving academy (trainer-reported; current validity not established)'},
  ],
};
function safePhoto(value: string | undefined) {
  if (!value) return '';
  const path=value.trim();
  return /^\/images\/trainer\/[a-zA-Z0-9_-]+\.(?:jpg|jpeg|png|webp)$/.test(path) ? path : '';
}
