// OWNER-FRIENDLY CONFIGURATION — update these labels and links in GitHub.
// Keep this file public. Do not enter passwords, private client information,
// health records, certificate numbers or unapproved payment links.
// Global paid bookings are separately disabled in businessLaunch.ts.
export const quickStartLinks = [
  {id:'finder',number:'01',label:'Find my plan',description:'Two quick choices to find a free starting-level workout.',href:'/start/#plan-finder',icon:'✳'},
  {id:'plans',number:'02',label:'Free programmes',description:'Explore beginner, intermediate and advanced four-week routines.',href:'/programmes/',icon:'▤'},
  {id:'videos',number:'03',label:'Workout videos',description:'Search movements in the exercise video directory.',href:'/app/workouts/',icon:'▶'},
  {id:'tracker',number:'04',label:'My progress',description:'Log your workouts privately on this device.',href:'/app/dashboard/#progress',icon:'◉'},
] as const;
export const uiLabels = {
  quickStartTitle:'EVERYTHING IN ONE PLACE.',
  quickStartEyebrow:'FREE / QUICK START',
  prelaunchMessage:'All workout learning tools are free. Live paid coaching and bookings are not yet available.',
  supportNote:'This website provides general fitness education and is not a personalised medical or exercise prescription.',
} as const;
