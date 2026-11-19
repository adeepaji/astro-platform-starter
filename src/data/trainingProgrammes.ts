// Original educational programme examples for BF GYM Global.
// No personalised coaching, health assessment, guarantee or fixed calorie target.
// Video links are live YouTube searches, not independently verified individual demonstrations.
export type ProgrammeLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type ProgrammeKind = 'Strength' | 'Cardio' | 'Recovery' | 'Rest';
export interface ProgrammeExercise { name:string; volume:string; tip:string; }
export interface ProgrammeDay { day:string; label:string; kind:ProgrammeKind; time:string; exercises:ProgrammeExercise[]; notes:string; }
export interface TrainingProgramme { id:string; name:string; level:ProgrammeLevel; caption:string; duration:string; sessions:string; equipment:string; goal:string; description:string; weeks:string[]; notes:string[]; nutrition:string[]; schedule:ProgrammeDay[]; }
export const trainingProgrammes: TrainingProgramme[] = [
  {
    "id": "beginner",
    "name": "Start Strong",
    "level": "Beginner",
    "caption": "BUILD YOUR FOUNDATION",
    "duration": "4 weeks",
    "sessions": "4 planned activity days weekly",
    "equipment": "A chair, a resistance band or light dumbbells",
    "goal": "Develop confidence with basic strength, low-impact cardio and recovery.",
    "description": "An approachable starting point for adults getting back into movement. Rest whenever needed and work at a pace where you can speak comfortably.",
    "weeks": [
      "Week 1 · Learn movements. Start with 1–2 sets and short walks.",
      "Week 2 · Aim for 2 sets. Increase walking by a few minutes if comfortable.",
      "Week 3 · Repeat controlled movements; add a set or a little time only if ready.",
      "Week 4 · Practise consistency. Review what felt manageable and what to adjust."
    ],
    "notes": [
      "Begin with a 5–10 minute warm-up before resistance work.",
      "Strength days are separated to allow recovery.",
      "Light weights are optional; bodyweight versions are appropriate."
    ],
    "nutrition": [
      "Build balanced meals with vegetables or fruit, wholegrain or other starchy carbohydrates, and a source of protein.",
      "Keep water available and eat enough to support your activity and recovery.",
      "No fixed calorie goal: energy needs vary between individuals."
    ],
    "schedule": [
      {
        "day": "Mon",
        "label": "Full-body foundations A",
        "kind": "Strength",
        "time": "25–40 min",
        "exercises": [
          {
            "name": "Chair Squat",
            "volume": "1–2 × 8–12",
            "tip": "Sit back gently and stand with control."
          },
          {
            "name": "Incline Push-Up",
            "volume": "1–2 × 6–10",
            "tip": "Choose a wall or stable support to adjust difficulty."
          },
          {
            "name": "Resistance Band Row",
            "volume": "1–2 × 10–12",
            "tip": "Keep your shoulders away from your ears."
          },
          {
            "name": "Glute Bridge",
            "volume": "1–2 × 10–12",
            "tip": "Squeeze glutes and avoid arching your lower back."
          },
          {
            "name": "Dead Bug",
            "volume": "1–2 × 6 each side",
            "tip": "Move slowly and keep a comfortable range."
          }
        ],
        "notes": "Warm up 5–10 minutes; rest 60–90 seconds between exercises."
      },
      {
        "day": "Tue",
        "label": "Walk or easy cycle",
        "kind": "Cardio",
        "time": "15–30 min",
        "exercises": [
          {
            "name": "Brisk Walking",
            "volume": "15–30 min",
            "tip": "Use the talk test: breathing quicker, but able to speak."
          }
        ],
        "notes": "Build duration gradually."
      },
      {
        "day": "Wed",
        "label": "Gentle mobility",
        "kind": "Recovery",
        "time": "10–15 min",
        "exercises": [
          {
            "name": "Gentle Full Body Mobility",
            "volume": "10–15 min",
            "tip": "Light range-of-motion movements; skip painful positions."
          }
        ],
        "notes": "Recovery is part of training. Complete rest is also fine."
      },
      {
        "day": "Thu",
        "label": "Full-body foundations B",
        "kind": "Strength",
        "time": "25–40 min",
        "exercises": [
          {
            "name": "Supported Reverse Lunge",
            "volume": "1–2 × 6–10 each side",
            "tip": "Hold a stable support if balance is a challenge."
          },
          {
            "name": "Dumbbell Floor Press",
            "volume": "1–2 × 8–12",
            "tip": "A light dumbbell or an easier push-up variation works."
          },
          {
            "name": "Seated Band Row",
            "volume": "1–2 × 10–12",
            "tip": "Draw elbows behind you without leaning back."
          },
          {
            "name": "Bodyweight Hip Hinge",
            "volume": "1–2 × 10–12",
            "tip": "Move from the hips, keeping the spine comfortable."
          },
          {
            "name": "Bird Dog",
            "volume": "1–2 × 6 each side",
            "tip": "Keep your torso steady as you reach."
          }
        ],
        "notes": "Choose light and controlled movement, not maximal effort."
      },
      {
        "day": "Fri",
        "label": "Rest day",
        "kind": "Rest",
        "time": "As needed",
        "exercises": [],
        "notes": "Pause, sleep well and recover. An easy stroll is optional."
      },
      {
        "day": "Sat",
        "label": "Cardio and easy stretching",
        "kind": "Cardio",
        "time": "20–35 min",
        "exercises": [
          {
            "name": "Stationary Cycling",
            "volume": "15–25 min",
            "tip": "A relaxed steady pace."
          },
          {
            "name": "Gentle Lower Body Stretching",
            "volume": "5–10 min",
            "tip": "No bouncing; stay within a comfortable range."
          }
        ],
        "notes": "Walking is a suitable substitute for cycling."
      },
      {
        "day": "Sun",
        "label": "Rest or relaxed walk",
        "kind": "Rest",
        "time": "Optional",
        "exercises": [],
        "notes": "Rest completely if you need it."
      }
    ]
  },
  {
    "id": "intermediate",
    "name": "Build Momentum",
    "level": "Intermediate",
    "caption": "STRENGTH + CARDIO",
    "duration": "4 weeks",
    "sessions": "5 planned training days weekly",
    "equipment": "Gym machines, dumbbells and a cardio machine",
    "goal": "Develop repeatable strength sessions alongside cardio and active recovery.",
    "description": "Designed for people already comfortable with regular gym sessions. Adjust loads to preserve technique and leave a few repetitions in reserve.",
    "weeks": [
      "Week 1 · Choose manageable weights and learn consistent technique.",
      "Week 2 · Add a small number of repetitions if sets feel controlled.",
      "Week 3 · Progress a load modestly or add one set to selected movements, not both.",
      "Week 4 · Reduce volume if fatigue builds; reflect on form and consistency."
    ],
    "notes": [
      "Warm up 5–10 minutes and practise any new lifts using a lighter load.",
      "Keep 1–3 comfortable repetitions in reserve rather than training to failure.",
      "Aim for a manageable routine before increasing volume."
    ],
    "nutrition": [
      "Include protein foods across regular meals to support normal muscle repair.",
      "Choose meals that include fruit, vegetables and fibre-rich carbohydrates.",
      "Avoid prescriptive calorie deficits; adjust intake with an appropriately qualified professional if needed."
    ],
    "schedule": [
      {
        "day": "Mon",
        "label": "Upper-body strength",
        "kind": "Strength",
        "time": "45–60 min",
        "exercises": [
          {
            "name": "Dumbbell Bench Press",
            "volume": "3 × 8–12",
            "tip": "Keep shoulders supported and lower under control."
          },
          {
            "name": "Lat Pulldown",
            "volume": "3 × 8–12",
            "tip": "Pull towards the upper chest, avoid leaning excessively."
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "volume": "2 × 8–12",
            "tip": "Stop at a comfortable shoulder range."
          },
          {
            "name": "Seated Cable Row",
            "volume": "2 × 10–12",
            "tip": "Move through your shoulder blades."
          },
          {
            "name": "Pallof Press",
            "volume": "2 × 10 each side",
            "tip": "Resist rotating your torso."
          }
        ],
        "notes": "Rest around 60–120 seconds between sets."
      },
      {
        "day": "Tue",
        "label": "Steady cardio",
        "kind": "Cardio",
        "time": "25–40 min",
        "exercises": [
          {
            "name": "Treadmill Incline Walk",
            "volume": "25–40 min",
            "tip": "Stay at a sustainable talk-test pace."
          }
        ],
        "notes": "Reduce incline or pace as needed."
      },
      {
        "day": "Wed",
        "label": "Lower-body strength",
        "kind": "Strength",
        "time": "45–60 min",
        "exercises": [
          {
            "name": "Goblet Squat",
            "volume": "3 × 8–12",
            "tip": "Keep feet stable and maintain a comfortable depth."
          },
          {
            "name": "Dumbbell Romanian Deadlift",
            "volume": "3 × 8–12",
            "tip": "Hinge at the hips and avoid rounding through effort."
          },
          {
            "name": "Leg Press",
            "volume": "2 × 10–12",
            "tip": "Use a controlled range."
          },
          {
            "name": "Seated Leg Curl",
            "volume": "2 × 10–12",
            "tip": "Move without momentum."
          },
          {
            "name": "Standing Calf Raise",
            "volume": "2 × 12–15",
            "tip": "Rise and lower gradually."
          }
        ],
        "notes": "Use loads that let you preserve balance and technique."
      },
      {
        "day": "Thu",
        "label": "Mobility and recovery",
        "kind": "Recovery",
        "time": "10–25 min",
        "exercises": [
          {
            "name": "Easy Walking",
            "volume": "10–20 min",
            "tip": "Comfortable pace."
          },
          {
            "name": "Upper Body Mobility",
            "volume": "5 min",
            "tip": "Gentle shoulders and upper-back movement."
          }
        ],
        "notes": "Optional easy movement rather than another hard day."
      },
      {
        "day": "Fri",
        "label": "Full-body strength",
        "kind": "Strength",
        "time": "40–55 min",
        "exercises": [
          {
            "name": "Dumbbell Split Squat",
            "volume": "2 × 8–10 each side",
            "tip": "Hold a wall or support if helpful."
          },
          {
            "name": "Incline Dumbbell Bench Press",
            "volume": "3 × 8–12",
            "tip": "Smooth repetitions."
          },
          {
            "name": "Chest Supported Dumbbell Row",
            "volume": "3 × 8–12",
            "tip": "Keep the chest in contact with support."
          },
          {
            "name": "Glute Bridge",
            "volume": "2 × 12–15",
            "tip": "Pause briefly at the top."
          },
          {
            "name": "Forearm Plank",
            "volume": "2 × 20–40 sec",
            "tip": "Breathe and keep hips supported."
          }
        ],
        "notes": "Finish with an easy cool-down."
      },
      {
        "day": "Sat",
        "label": "Aerobic conditioning",
        "kind": "Cardio",
        "time": "25–40 min",
        "exercises": [
          {
            "name": "Stationary Bike Workout",
            "volume": "25–40 min",
            "tip": "Steady pace or gentle bursts of increased effort."
          }
        ],
        "notes": "Optional: alternate 1 min brisk / 2 min easy, only if comfortable."
      },
      {
        "day": "Sun",
        "label": "Full rest",
        "kind": "Rest",
        "time": "As needed",
        "exercises": [],
        "notes": "Let recovery guide the following training week."
      }
    ]
  },
  {
    "id": "advanced",
    "name": "Strength & Conditioning",
    "level": "Advanced",
    "caption": "PROGRESSIVE GYM ROUTINE",
    "duration": "4 weeks",
    "sessions": "5–6 planned activity days weekly",
    "equipment": "Fully equipped gym and cardio equipment",
    "goal": "Organise an experienced lifter’s training across strength, conditioning and recovery.",
    "description": "For adults already accustomed to frequent exercise and competent with the movements. This is not a maximal-strength, competitive or medical programme.",
    "weeks": [
      "Week 1 · Establish sustainable training loads; note technique and energy levels.",
      "Week 2 · Progress a rep on selected movements while keeping good form.",
      "Week 3 · Add a small load increase only where consistent technique permits.",
      "Week 4 · Use an easier volume week if fatigue accumulates. Review training response."
    ],
    "notes": [
      "Warm up progressively and avoid maximal lifts or pain-provoking movements.",
      "Track quality, energy and recovery; more training is not always better.",
      "Conditioning intervals are optional and should match current fitness."
    ],
    "nutrition": [
      "Fuel training with appropriate portions of carbohydrates, protein and vegetables.",
      "Adequate energy intake, sleep and hydration support performance and recovery.",
      "A sports dietitian can help with individual performance or body-composition needs."
    ],
    "schedule": [
      {
        "day": "Mon",
        "label": "Upper-body strength",
        "kind": "Strength",
        "time": "55–70 min",
        "exercises": [
          {
            "name": "Barbell Bench Press",
            "volume": "3 × 5–8",
            "tip": "Use a competent spotter or safety rails."
          },
          {
            "name": "Chest Supported Row Machine",
            "volume": "3 × 8–10",
            "tip": "Prioritise a smooth range of motion."
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "volume": "3 × 8–10",
            "tip": "Avoid forcing shoulder range."
          },
          {
            "name": "Lat Pulldown",
            "volume": "3 × 10–12",
            "tip": "Control the return."
          },
          {
            "name": "Cable Triceps Pushdown",
            "volume": "2 × 12",
            "tip": "Keep elbows close to sides."
          }
        ],
        "notes": "Leave repetitions in reserve and rest enough to maintain quality."
      },
      {
        "day": "Tue",
        "label": "Lower-body strength",
        "kind": "Strength",
        "time": "55–70 min",
        "exercises": [
          {
            "name": "Back Squat",
            "volume": "3 × 5–8",
            "tip": "Use a load and range you can control."
          },
          {
            "name": "Romanian Deadlift",
            "volume": "3 × 8–10",
            "tip": "Brace and hinge from the hips."
          },
          {
            "name": "Leg Press",
            "volume": "3 × 10",
            "tip": "Avoid bouncing at the bottom."
          },
          {
            "name": "Seated Leg Curl",
            "volume": "2 × 12",
            "tip": "Maintain control."
          },
          {
            "name": "Standing Calf Raise",
            "volume": "3 × 12",
            "tip": "Pause through the movement."
          }
        ],
        "notes": "Experienced lifters only; scale or substitute unfamiliar lifts."
      },
      {
        "day": "Wed",
        "label": "Aerobic conditioning",
        "kind": "Cardio",
        "time": "25–40 min",
        "exercises": [
          {
            "name": "Rowing Machine Steady Cardio",
            "volume": "25–40 min",
            "tip": "Focus on technique and sustainable intensity."
          }
        ],
        "notes": "A short 5-minute cool-down follows."
      },
      {
        "day": "Thu",
        "label": "Upper-body hypertrophy",
        "kind": "Strength",
        "time": "50–65 min",
        "exercises": [
          {
            "name": "Incline Dumbbell Bench Press",
            "volume": "3 × 8–12",
            "tip": "Avoid bouncing at the bottom."
          },
          {
            "name": "Single Arm Dumbbell Row",
            "volume": "3 × 10 each side",
            "tip": "Support the torso and control rotation."
          },
          {
            "name": "Cable Lateral Raise",
            "volume": "2 × 12–15",
            "tip": "Work within a comfortable shoulder range."
          },
          {
            "name": "Cable Face Pull",
            "volume": "2 × 12–15",
            "tip": "Avoid shrugging."
          },
          {
            "name": "Hammer Curl",
            "volume": "2 × 10–12",
            "tip": "Keep wrists stable."
          }
        ],
        "notes": "Reduce volume if shoulders or elbows are sore."
      },
      {
        "day": "Fri",
        "label": "Lower-body accessories",
        "kind": "Strength",
        "time": "50–65 min",
        "exercises": [
          {
            "name": "Dumbbell Bulgarian Split Squat",
            "volume": "3 × 8 each side",
            "tip": "Hold support if needed."
          },
          {
            "name": "Hip Thrust",
            "volume": "3 × 10",
            "tip": "Use a controlled range."
          },
          {
            "name": "Leg Extension",
            "volume": "2 × 12",
            "tip": "Keep the load moderate."
          },
          {
            "name": "Lying Leg Curl",
            "volume": "2 × 12",
            "tip": "Slow, smooth reps."
          },
          {
            "name": "Cable Pallof Press",
            "volume": "2 × 10 each side",
            "tip": "Resist twisting."
          }
        ],
        "notes": "Rest 60–120 seconds between sets."
      },
      {
        "day": "Sat",
        "label": "Optional conditioning",
        "kind": "Cardio",
        "time": "20–35 min",
        "exercises": [
          {
            "name": "Air Bike Intervals",
            "volume": "5 rounds: 30 sec brisk / 90 sec easy",
            "tip": "Intervals are optional; stop if dizzy or unwell."
          },
          {
            "name": "Easy Cycling",
            "volume": "10–20 min",
            "tip": "Use a sustainable pace."
          }
        ],
        "notes": "Replace with easy walking or rest when needed."
      },
      {
        "day": "Sun",
        "label": "Rest and reset",
        "kind": "Rest",
        "time": "As needed",
        "exercises": [],
        "notes": "Reflect on energy, soreness and quality of sleep."
      }
    ]
  }
];
export const programmeVideoSearch = (exerciseName: string): string => 'https://www.youtube.com/results?search_query='+encodeURIComponent(exerciseName+' exercise proper form tutorial');
