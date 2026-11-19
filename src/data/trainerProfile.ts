// BF GYM Global coach content.
// Original course certificates and earlier CV have been inspected.
// Awarding bodies have not been contacted for independent verification.
// Historical certificates must NOT be presented as current licences,
// registrations or active first aid qualifications. No public dates by request.
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
    {title:'Diploma in Personal Training',body:'K11 School of Fitness Sciences, India — certificate copy supplied; issuer verification not completed'},
    {title:'Advanced Personal Training',body:'Gold’s Gym Fitness Institute, India — historical course completion; not represented as a current credential'},
    {title:'Female Fitness Training',body:'Gold’s Gym Fitness Institute, India — historical course completion; not represented as a current credential'},
    {title:'Special Population Fitness Training',body:'Gold’s Gym Fitness Institute, India — historical course completion; not represented as a current credential'},
    {title:'CPR Training',body:'Australian Life Saving Academy, NSW — historical training certificate; not current'},
    {title:'AED Training',body:'Australian Life Saving Academy, NSW — historical training certificate; not current'},

  ],
};
function safePhoto(value: string | undefined) {
  if (!value) return '';
  const path=value.trim();
  return /^\/images\/trainer\/[a-zA-Z0-9_-]+\.(?:jpg|jpeg|png|webp)$/.test(path) ? path : '';
}
