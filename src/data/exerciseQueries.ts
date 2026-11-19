// Explore common exercises via current public YouTube search results.
// Catalogue entries are exercise search terms, NOT verified individual YouTube videos.
// Results are provided by YouTube at click time, not embedded or copied by BF GYM.
export type ExerciseCategory = 'strength' | 'cardio' | 'hiit';
export type ExerciseLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export interface ExerciseQuery {
  id: string;
  name: string;
  category: ExerciseCategory;
  focus: string;
  equipment: string;
  level: ExerciseLevel;
}
export const exerciseQueries: ExerciseQuery[] = [
  {
    "id": "strength-001",
    "name": "Barbell Bench Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-002",
    "name": "Incline Barbell Bench Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-003",
    "name": "Decline Barbell Bench Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-004",
    "name": "Close Grip Bench Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-005",
    "name": "Paused Bench Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-006",
    "name": "Floor Press with Barbell",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-007",
    "name": "Barbell Pullover",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-008",
    "name": "Guillotine Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-009",
    "name": "Spoto Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-010",
    "name": "Smith Machine Bench Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-011",
    "name": "Flat Dumbbell Bench Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-012",
    "name": "Incline Dumbbell Bench Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-013",
    "name": "Decline Dumbbell Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-014",
    "name": "Dumbbell Chest Fly",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-015",
    "name": "Incline Dumbbell Chest Fly",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-016",
    "name": "Dumbbell Squeeze Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-017",
    "name": "Dumbbell Floor Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-018",
    "name": "Single Arm Dumbbell Bench Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-019",
    "name": "Neutral Grip Dumbbell Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-020",
    "name": "Dumbbell Pullover",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-021",
    "name": "Alternating Dumbbell Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-022",
    "name": "Hex Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-023",
    "name": "Cable Chest Fly",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-024",
    "name": "High to Low Cable Fly",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-025",
    "name": "Low to High Cable Fly",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-026",
    "name": "Standing Cable Chest Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-027",
    "name": "Single Arm Cable Chest Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-028",
    "name": "Pec Deck Fly",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-029",
    "name": "Chest Press Machine",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-030",
    "name": "Incline Chest Press Machine",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-031",
    "name": "Hammer Strength Chest Press",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-032",
    "name": "Cable Crossover",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-033",
    "name": "Seated Machine Fly",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-034",
    "name": "Wall Push-Up",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-035",
    "name": "Incline Push-Up",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-036",
    "name": "Knee Push-Up",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-037",
    "name": "Standard Push-Up",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-038",
    "name": "Wide Push-Up",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-039",
    "name": "Diamond Push-Up",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-040",
    "name": "Decline Push-Up",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-041",
    "name": "Archer Push-Up",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-042",
    "name": "Tempo Push-Up",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-043",
    "name": "Chest Dip",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-044",
    "name": "Plyometric Push-Up",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-045",
    "name": "Pseudo Planche Push-Up",
    "category": "strength",
    "focus": "Chest",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-046",
    "name": "Conventional Barbell Deadlift",
    "category": "strength",
    "focus": "Back",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-047",
    "name": "Barbell Bent Over Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-048",
    "name": "Pendlay Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-049",
    "name": "Underhand Barbell Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-050",
    "name": "Landmine Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-051",
    "name": "Meadows Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-052",
    "name": "Rack Pull",
    "category": "strength",
    "focus": "Back",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-053",
    "name": "Snatch Grip Deadlift",
    "category": "strength",
    "focus": "Back",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-054",
    "name": "Romanian Deadlift",
    "category": "strength",
    "focus": "Back",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-055",
    "name": "Barbell Shrug",
    "category": "strength",
    "focus": "Back",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-056",
    "name": "Single Arm Dumbbell Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-057",
    "name": "Chest Supported Dumbbell Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-058",
    "name": "Bent Over Two Dumbbell Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-059",
    "name": "Renegade Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-060",
    "name": "Dumbbell Reverse Fly",
    "category": "strength",
    "focus": "Back",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-061",
    "name": "Dumbbell Shrug",
    "category": "strength",
    "focus": "Back",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-062",
    "name": "Incline Bench Dumbbell Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-063",
    "name": "Dumbbell Pullover",
    "category": "strength",
    "focus": "Back",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-064",
    "name": "Dumbbell Deadlift",
    "category": "strength",
    "focus": "Back",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-065",
    "name": "Lat Pulldown",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-066",
    "name": "Close Grip Lat Pulldown",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-067",
    "name": "Wide Grip Lat Pulldown",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-068",
    "name": "Reverse Grip Lat Pulldown",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-069",
    "name": "Seated Cable Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-070",
    "name": "Close Grip Cable Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-071",
    "name": "Single Arm Cable Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-072",
    "name": "Straight Arm Cable Pulldown",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-073",
    "name": "Cable Face Pull",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-074",
    "name": "Chest Supported Row Machine",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-075",
    "name": "Seated Row Machine",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-076",
    "name": "Assisted Pull-Up Machine",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-077",
    "name": "Iso Lateral Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-078",
    "name": "Machine High Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-079",
    "name": "Cable Rear Delt Fly",
    "category": "strength",
    "focus": "Back",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-080",
    "name": "Assisted Pull-Up",
    "category": "strength",
    "focus": "Back",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "strength-081",
    "name": "Pull-Up",
    "category": "strength",
    "focus": "Back",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "strength-082",
    "name": "Chin-Up",
    "category": "strength",
    "focus": "Back",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "strength-083",
    "name": "Neutral Grip Pull-Up",
    "category": "strength",
    "focus": "Back",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "strength-084",
    "name": "Inverted Row",
    "category": "strength",
    "focus": "Back",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "strength-085",
    "name": "Scapular Pull-Up",
    "category": "strength",
    "focus": "Back",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "strength-086",
    "name": "Australian Pull-Up",
    "category": "strength",
    "focus": "Back",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "strength-087",
    "name": "Superman Back Extension",
    "category": "strength",
    "focus": "Back",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "strength-088",
    "name": "Prone Y T W Raises",
    "category": "strength",
    "focus": "Back",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "strength-089",
    "name": "Back Extension",
    "category": "strength",
    "focus": "Back",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "strength-090",
    "name": "Seated Dumbbell Shoulder Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-091",
    "name": "Standing Dumbbell Shoulder Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-092",
    "name": "Arnold Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-093",
    "name": "Dumbbell Lateral Raise",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-094",
    "name": "Dumbbell Front Raise",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-095",
    "name": "Dumbbell Rear Delt Fly",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-096",
    "name": "Incline Dumbbell Rear Delt Raise",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-097",
    "name": "Dumbbell Upright Row",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-098",
    "name": "Dumbbell Cuban Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-099",
    "name": "Single Arm Dumbbell Overhead Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-100",
    "name": "Dumbbell Shrug",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-101",
    "name": "Standing Barbell Overhead Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-102",
    "name": "Seated Barbell Overhead Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-103",
    "name": "Push Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-104",
    "name": "Strict Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-105",
    "name": "Barbell Upright Row",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-106",
    "name": "Behind the Neck Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-107",
    "name": "Bradford Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-108",
    "name": "Barbell Front Raise",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-109",
    "name": "Landmine Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-110",
    "name": "Cable Lateral Raise",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-111",
    "name": "Single Arm Cable Lateral Raise",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-112",
    "name": "Cable Front Raise",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-113",
    "name": "Cable Rear Delt Fly",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-114",
    "name": "Face Pull",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-115",
    "name": "Shoulder Press Machine",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-116",
    "name": "Reverse Pec Deck",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-117",
    "name": "Cable Y Raise",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-118",
    "name": "Landmine Shoulder Press",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-119",
    "name": "Band Pull Apart",
    "category": "strength",
    "focus": "Shoulders",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-120",
    "name": "Back Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-121",
    "name": "Front Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-122",
    "name": "Box Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-123",
    "name": "Pause Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-124",
    "name": "Zercher Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-125",
    "name": "Overhead Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-126",
    "name": "Bulgarian Split Squat with Barbell",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-127",
    "name": "Barbell Reverse Lunge",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-128",
    "name": "Barbell Walking Lunge",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-129",
    "name": "Barbell Romanian Deadlift",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-130",
    "name": "Good Morning",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-131",
    "name": "Sumo Deadlift",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-132",
    "name": "Trap Bar Deadlift",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-133",
    "name": "Barbell Hip Thrust",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-134",
    "name": "Goblet Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-135",
    "name": "Dumbbell Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-136",
    "name": "Dumbbell Sumo Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-137",
    "name": "Dumbbell Reverse Lunge",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-138",
    "name": "Dumbbell Walking Lunge",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-139",
    "name": "Dumbbell Bulgarian Split Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-140",
    "name": "Dumbbell Romanian Deadlift",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-141",
    "name": "Dumbbell Step-Up",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-142",
    "name": "Dumbbell Calf Raise",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-143",
    "name": "Dumbbell Lateral Lunge",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-144",
    "name": "Dumbbell Curtsy Lunge",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-145",
    "name": "Dumbbell Hip Thrust",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-146",
    "name": "Dumbbell Split Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-147",
    "name": "Leg Press",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-148",
    "name": "Hack Squat Machine",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-149",
    "name": "Smith Machine Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-150",
    "name": "Leg Extension",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-151",
    "name": "Seated Leg Curl",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-152",
    "name": "Lying Leg Curl",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-153",
    "name": "Standing Calf Raise Machine",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-154",
    "name": "Seated Calf Raise Machine",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-155",
    "name": "Hip Abduction Machine",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-156",
    "name": "Hip Adduction Machine",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-157",
    "name": "Glute Kickback Machine",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-158",
    "name": "Cable Pull Through",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-159",
    "name": "Cable Leg Curl",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-160",
    "name": "Belt Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-161",
    "name": "Bodyweight Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-162",
    "name": "Sumo Squat",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-163",
    "name": "Reverse Lunge",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-164",
    "name": "Forward Lunge",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-165",
    "name": "Walking Lunge",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-166",
    "name": "Side Lunge",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-167",
    "name": "Step-Up",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-168",
    "name": "Glute Bridge",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-169",
    "name": "Wall Sit",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-170",
    "name": "Calf Raise",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-171",
    "name": "Single Leg Calf Raise",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-172",
    "name": "Pistol Squat Progression",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-173",
    "name": "Single Leg Romanian Deadlift",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-174",
    "name": "Nordic Hamstring Curl Progression",
    "category": "strength",
    "focus": "Legs",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-175",
    "name": "Dumbbell Biceps Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-176",
    "name": "Hammer Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-177",
    "name": "Alternating Dumbbell Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-178",
    "name": "Incline Dumbbell Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-179",
    "name": "Concentration Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-180",
    "name": "Zottman Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-181",
    "name": "Cross Body Hammer Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-182",
    "name": "Dumbbell Preacher Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-183",
    "name": "Overhead Dumbbell Triceps Extension",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-184",
    "name": "Dumbbell Triceps Kickback",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-185",
    "name": "Dumbbell Skull Crusher",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-186",
    "name": "Dumbbell Tate Press",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-187",
    "name": "Wrist Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Dumbbells",
    "level": "Beginner"
  },
  {
    "id": "strength-188",
    "name": "Barbell Biceps Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-189",
    "name": "EZ Bar Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-190",
    "name": "Reverse Barbell Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-191",
    "name": "Drag Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-192",
    "name": "Preacher Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-193",
    "name": "Barbell Skull Crusher",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-194",
    "name": "Close Grip Barbell Bench Press",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-195",
    "name": "JM Press",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-196",
    "name": "Barbell Wrist Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Barbell",
    "level": "Intermediate"
  },
  {
    "id": "strength-197",
    "name": "Cable Biceps Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-198",
    "name": "Rope Hammer Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-199",
    "name": "Cable Preacher Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-200",
    "name": "Single Arm Cable Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-201",
    "name": "Cable Bayesian Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-202",
    "name": "Triceps Rope Pushdown",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-203",
    "name": "Straight Bar Triceps Pushdown",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-204",
    "name": "Single Arm Triceps Pushdown",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-205",
    "name": "Cable Overhead Triceps Extension",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-206",
    "name": "Cable Reverse Grip Pushdown",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-207",
    "name": "Assisted Dip Machine",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-208",
    "name": "Machine Biceps Curl",
    "category": "strength",
    "focus": "Arms",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-209",
    "name": "Forearm Plank",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-210",
    "name": "High Plank",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-211",
    "name": "Side Plank",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-212",
    "name": "Dead Bug",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-213",
    "name": "Bird Dog",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-214",
    "name": "Hollow Body Hold",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-215",
    "name": "Crunch",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-216",
    "name": "Reverse Crunch",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-217",
    "name": "Bicycle Crunch",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-218",
    "name": "Leg Raise",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-219",
    "name": "Bent Knee Leg Raise",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-220",
    "name": "Flutter Kicks",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-221",
    "name": "Scissor Kicks",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-222",
    "name": "Mountain Climbers",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-223",
    "name": "Russian Twist",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-224",
    "name": "V Sit",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-225",
    "name": "Side Crunch",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-226",
    "name": "Heel Touch",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-227",
    "name": "Toe Touch",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-228",
    "name": "Bear Plank",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-229",
    "name": "Hanging Knee Raise",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-230",
    "name": "Hanging Leg Raise",
    "category": "strength",
    "focus": "Core",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-231",
    "name": "Cable Crunch",
    "category": "strength",
    "focus": "Core",
    "equipment": "Cable / Machine",
    "level": "Intermediate"
  },
  {
    "id": "strength-232",
    "name": "Kneeling Cable Crunch",
    "category": "strength",
    "focus": "Core",
    "equipment": "Cable / Machine",
    "level": "Intermediate"
  },
  {
    "id": "strength-233",
    "name": "Pallof Press",
    "category": "strength",
    "focus": "Core",
    "equipment": "Cable / Machine",
    "level": "Intermediate"
  },
  {
    "id": "strength-234",
    "name": "Cable Wood Chop",
    "category": "strength",
    "focus": "Core",
    "equipment": "Cable / Machine",
    "level": "Intermediate"
  },
  {
    "id": "strength-235",
    "name": "Cable Side Bend",
    "category": "strength",
    "focus": "Core",
    "equipment": "Cable / Machine",
    "level": "Intermediate"
  },
  {
    "id": "strength-236",
    "name": "Ab Crunch Machine",
    "category": "strength",
    "focus": "Core",
    "equipment": "Cable / Machine",
    "level": "Intermediate"
  },
  {
    "id": "strength-237",
    "name": "Hanging Ab Straps Leg Raise",
    "category": "strength",
    "focus": "Core",
    "equipment": "Cable / Machine",
    "level": "Intermediate"
  },
  {
    "id": "strength-238",
    "name": "Ab Wheel Rollout",
    "category": "strength",
    "focus": "Core",
    "equipment": "Cable / Machine",
    "level": "Intermediate"
  },
  {
    "id": "strength-239",
    "name": "Medicine Ball Russian Twist",
    "category": "strength",
    "focus": "Core",
    "equipment": "Cable / Machine",
    "level": "Intermediate"
  },
  {
    "id": "strength-240",
    "name": "Glute Bridge",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-241",
    "name": "Single Leg Glute Bridge",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-242",
    "name": "Frog Pumps",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-243",
    "name": "Donkey Kick",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-244",
    "name": "Fire Hydrant",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-245",
    "name": "Clamshell",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-246",
    "name": "Lateral Band Walk",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-247",
    "name": "Monster Walk",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-248",
    "name": "Reverse Hyperextension",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-249",
    "name": "Hip Airplane",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "strength-250",
    "name": "Cable Glute Kickback",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-251",
    "name": "Glute Drive Machine",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-252",
    "name": "Smith Machine Hip Thrust",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-253",
    "name": "Cable Hip Abduction",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-254",
    "name": "Hip Abduction Machine",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-255",
    "name": "Cable Pull Through",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-256",
    "name": "45 Degree Back Extension Glute Bias",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-257",
    "name": "Step Mill Glute Workout",
    "category": "strength",
    "focus": "Glutes",
    "equipment": "Cable / Machine",
    "level": "Beginner"
  },
  {
    "id": "strength-258",
    "name": "Kettlebell Swing",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "strength-259",
    "name": "Kettlebell Deadlift",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "strength-260",
    "name": "Kettlebell Goblet Squat",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "strength-261",
    "name": "Kettlebell Clean",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "strength-262",
    "name": "Kettlebell Clean and Press",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "strength-263",
    "name": "Kettlebell Snatch",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "strength-264",
    "name": "Kettlebell Turkish Get Up",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "strength-265",
    "name": "Kettlebell Farmer Carry",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "strength-266",
    "name": "Kettlebell Windmill",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "strength-267",
    "name": "Kettlebell Front Rack Lunge",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "strength-268",
    "name": "Kettlebell Thruster",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "strength-269",
    "name": "Band Squat",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Resistance band",
    "level": "Beginner"
  },
  {
    "id": "strength-270",
    "name": "Band Row",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Resistance band",
    "level": "Beginner"
  },
  {
    "id": "strength-271",
    "name": "Band Chest Press",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Resistance band",
    "level": "Beginner"
  },
  {
    "id": "strength-272",
    "name": "Band Chest Fly",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Resistance band",
    "level": "Beginner"
  },
  {
    "id": "strength-273",
    "name": "Band Biceps Curl",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Resistance band",
    "level": "Beginner"
  },
  {
    "id": "strength-274",
    "name": "Band Overhead Press",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Resistance band",
    "level": "Beginner"
  },
  {
    "id": "strength-275",
    "name": "Band Triceps Extension",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Resistance band",
    "level": "Beginner"
  },
  {
    "id": "strength-276",
    "name": "Band Pull Apart",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Resistance band",
    "level": "Beginner"
  },
  {
    "id": "strength-277",
    "name": "Band Pallof Press",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Resistance band",
    "level": "Beginner"
  },
  {
    "id": "strength-278",
    "name": "Band Good Morning",
    "category": "strength",
    "focus": "Full Body",
    "equipment": "Resistance band",
    "level": "Beginner"
  },
  {
    "id": "cardio-001",
    "name": "Treadmill Brisk Walk",
    "category": "cardio",
    "focus": "Walking / Running",
    "equipment": "Treadmill",
    "level": "Beginner"
  },
  {
    "id": "cardio-002",
    "name": "Treadmill Incline Walk",
    "category": "cardio",
    "focus": "Walking / Running",
    "equipment": "Treadmill",
    "level": "Beginner"
  },
  {
    "id": "cardio-003",
    "name": "Treadmill Jogging",
    "category": "cardio",
    "focus": "Walking / Running",
    "equipment": "Treadmill",
    "level": "Beginner"
  },
  {
    "id": "cardio-004",
    "name": "Treadmill Running Technique",
    "category": "cardio",
    "focus": "Walking / Running",
    "equipment": "Treadmill",
    "level": "Beginner"
  },
  {
    "id": "cardio-005",
    "name": "Treadmill Intervals",
    "category": "cardio",
    "focus": "Walking / Running",
    "equipment": "Treadmill",
    "level": "Beginner"
  },
  {
    "id": "cardio-006",
    "name": "Treadmill Hill Walk",
    "category": "cardio",
    "focus": "Walking / Running",
    "equipment": "Treadmill",
    "level": "Beginner"
  },
  {
    "id": "cardio-007",
    "name": "Treadmill Power Walk",
    "category": "cardio",
    "focus": "Walking / Running",
    "equipment": "Treadmill",
    "level": "Beginner"
  },
  {
    "id": "cardio-008",
    "name": "Treadmill Zone 2 Cardio",
    "category": "cardio",
    "focus": "Walking / Running",
    "equipment": "Treadmill",
    "level": "Beginner"
  },
  {
    "id": "cardio-009",
    "name": "Treadmill Run Walk Intervals",
    "category": "cardio",
    "focus": "Walking / Running",
    "equipment": "Treadmill",
    "level": "Beginner"
  },
  {
    "id": "cardio-010",
    "name": "Treadmill Sprint Intervals",
    "category": "cardio",
    "focus": "Walking / Running",
    "equipment": "Treadmill",
    "level": "Beginner"
  },
  {
    "id": "cardio-011",
    "name": "Stationary Bike Setup",
    "category": "cardio",
    "focus": "Cycling",
    "equipment": "Exercise bike",
    "level": "Beginner"
  },
  {
    "id": "cardio-012",
    "name": "Easy Stationary Bike Ride",
    "category": "cardio",
    "focus": "Cycling",
    "equipment": "Exercise bike",
    "level": "Beginner"
  },
  {
    "id": "cardio-013",
    "name": "Spin Bike Workout",
    "category": "cardio",
    "focus": "Cycling",
    "equipment": "Exercise bike",
    "level": "Beginner"
  },
  {
    "id": "cardio-014",
    "name": "Cycling Intervals",
    "category": "cardio",
    "focus": "Cycling",
    "equipment": "Exercise bike",
    "level": "Beginner"
  },
  {
    "id": "cardio-015",
    "name": "Bike Hill Climb Workout",
    "category": "cardio",
    "focus": "Cycling",
    "equipment": "Exercise bike",
    "level": "Beginner"
  },
  {
    "id": "cardio-016",
    "name": "Recumbent Bike Workout",
    "category": "cardio",
    "focus": "Cycling",
    "equipment": "Exercise bike",
    "level": "Beginner"
  },
  {
    "id": "cardio-017",
    "name": "Indoor Cycling Endurance",
    "category": "cardio",
    "focus": "Cycling",
    "equipment": "Exercise bike",
    "level": "Beginner"
  },
  {
    "id": "cardio-018",
    "name": "Zone 2 Cycling",
    "category": "cardio",
    "focus": "Cycling",
    "equipment": "Exercise bike",
    "level": "Beginner"
  },
  {
    "id": "cardio-019",
    "name": "Rowing Machine Technique",
    "category": "cardio",
    "focus": "Rowing / Machines",
    "equipment": "Cardio machine",
    "level": "Beginner"
  },
  {
    "id": "cardio-020",
    "name": "Rowing Machine Steady Cardio",
    "category": "cardio",
    "focus": "Rowing / Machines",
    "equipment": "Cardio machine",
    "level": "Beginner"
  },
  {
    "id": "cardio-021",
    "name": "Rowing Machine Interval Workout",
    "category": "cardio",
    "focus": "Rowing / Machines",
    "equipment": "Cardio machine",
    "level": "Beginner"
  },
  {
    "id": "cardio-022",
    "name": "Elliptical Trainer Technique",
    "category": "cardio",
    "focus": "Rowing / Machines",
    "equipment": "Cardio machine",
    "level": "Beginner"
  },
  {
    "id": "cardio-023",
    "name": "Cross Trainer Workout",
    "category": "cardio",
    "focus": "Rowing / Machines",
    "equipment": "Cardio machine",
    "level": "Beginner"
  },
  {
    "id": "cardio-024",
    "name": "Stair Climber Workout",
    "category": "cardio",
    "focus": "Rowing / Machines",
    "equipment": "Cardio machine",
    "level": "Beginner"
  },
  {
    "id": "cardio-025",
    "name": "Stairmaster Intervals",
    "category": "cardio",
    "focus": "Rowing / Machines",
    "equipment": "Cardio machine",
    "level": "Beginner"
  },
  {
    "id": "cardio-026",
    "name": "SkiErg Machine Technique",
    "category": "cardio",
    "focus": "Rowing / Machines",
    "equipment": "Cardio machine",
    "level": "Beginner"
  },
  {
    "id": "cardio-027",
    "name": "Air Bike Workout",
    "category": "cardio",
    "focus": "Rowing / Machines",
    "equipment": "Cardio machine",
    "level": "Beginner"
  },
  {
    "id": "cardio-028",
    "name": "Arc Trainer Workout",
    "category": "cardio",
    "focus": "Rowing / Machines",
    "equipment": "Cardio machine",
    "level": "Beginner"
  },
  {
    "id": "cardio-029",
    "name": "Basic Jump Rope Bounce",
    "category": "cardio",
    "focus": "Jump Rope",
    "equipment": "Jump rope",
    "level": "Beginner"
  },
  {
    "id": "cardio-030",
    "name": "Boxer Skip Jump Rope",
    "category": "cardio",
    "focus": "Jump Rope",
    "equipment": "Jump rope",
    "level": "Beginner"
  },
  {
    "id": "cardio-031",
    "name": "Alternate Foot Jump Rope",
    "category": "cardio",
    "focus": "Jump Rope",
    "equipment": "Jump rope",
    "level": "Beginner"
  },
  {
    "id": "cardio-032",
    "name": "Side Swing Jump Rope",
    "category": "cardio",
    "focus": "Jump Rope",
    "equipment": "Jump rope",
    "level": "Beginner"
  },
  {
    "id": "cardio-033",
    "name": "High Knee Jump Rope",
    "category": "cardio",
    "focus": "Jump Rope",
    "equipment": "Jump rope",
    "level": "Beginner"
  },
  {
    "id": "cardio-034",
    "name": "Double Under Jump Rope",
    "category": "cardio",
    "focus": "Jump Rope",
    "equipment": "Jump rope",
    "level": "Beginner"
  },
  {
    "id": "cardio-035",
    "name": "Jump Rope Intervals",
    "category": "cardio",
    "focus": "Jump Rope",
    "equipment": "Jump rope",
    "level": "Beginner"
  },
  {
    "id": "cardio-036",
    "name": "Jump Rope Footwork Basics",
    "category": "cardio",
    "focus": "Jump Rope",
    "equipment": "Jump rope",
    "level": "Beginner"
  },
  {
    "id": "cardio-037",
    "name": "Marching in Place",
    "category": "cardio",
    "focus": "Low Impact",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-038",
    "name": "Step Touch",
    "category": "cardio",
    "focus": "Low Impact",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-039",
    "name": "Side Steps",
    "category": "cardio",
    "focus": "Low Impact",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-040",
    "name": "Low Impact Jumping Jack",
    "category": "cardio",
    "focus": "Low Impact",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-041",
    "name": "Walking High Knees",
    "category": "cardio",
    "focus": "Low Impact",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-042",
    "name": "Standing Knee Drive",
    "category": "cardio",
    "focus": "Low Impact",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-043",
    "name": "Standing Toe Tap",
    "category": "cardio",
    "focus": "Low Impact",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-044",
    "name": "Shadow Boxing Cardio",
    "category": "cardio",
    "focus": "Low Impact",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-045",
    "name": "Standing Heel Dig",
    "category": "cardio",
    "focus": "Low Impact",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-046",
    "name": "Low Impact Aerobic Workout",
    "category": "cardio",
    "focus": "Low Impact",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-047",
    "name": "Chair Cardio Workout",
    "category": "cardio",
    "focus": "Low Impact",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-048",
    "name": "Gentle Dance Cardio Workout",
    "category": "cardio",
    "focus": "Low Impact",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-049",
    "name": "Jumping Jacks",
    "category": "cardio",
    "focus": "Cardio Drills",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "cardio-050",
    "name": "High Knees",
    "category": "cardio",
    "focus": "Cardio Drills",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "cardio-051",
    "name": "Butt Kicks",
    "category": "cardio",
    "focus": "Cardio Drills",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "cardio-052",
    "name": "Skaters",
    "category": "cardio",
    "focus": "Cardio Drills",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "cardio-053",
    "name": "Lateral Shuffle",
    "category": "cardio",
    "focus": "Cardio Drills",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "cardio-054",
    "name": "Carioca Drill",
    "category": "cardio",
    "focus": "Cardio Drills",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "cardio-055",
    "name": "Fast Feet",
    "category": "cardio",
    "focus": "Cardio Drills",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "cardio-056",
    "name": "Side-to-Side Hops",
    "category": "cardio",
    "focus": "Cardio Drills",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "cardio-057",
    "name": "Running in Place",
    "category": "cardio",
    "focus": "Cardio Drills",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "cardio-058",
    "name": "Star Jumps",
    "category": "cardio",
    "focus": "Cardio Drills",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "cardio-059",
    "name": "Jumping Rope Without Rope",
    "category": "cardio",
    "focus": "Cardio Drills",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "cardio-060",
    "name": "Power Skips",
    "category": "cardio",
    "focus": "Cardio Drills",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "cardio-061",
    "name": "Brisk Outdoor Walking",
    "category": "cardio",
    "focus": "Outdoor Cardio",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-062",
    "name": "Jogging Warm Up",
    "category": "cardio",
    "focus": "Outdoor Cardio",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-063",
    "name": "Running Cadence Drills",
    "category": "cardio",
    "focus": "Outdoor Cardio",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-064",
    "name": "Hill Walking",
    "category": "cardio",
    "focus": "Outdoor Cardio",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-065",
    "name": "Hill Running Intervals",
    "category": "cardio",
    "focus": "Outdoor Cardio",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-066",
    "name": "Running Strides",
    "category": "cardio",
    "focus": "Outdoor Cardio",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-067",
    "name": "Stair Running",
    "category": "cardio",
    "focus": "Outdoor Cardio",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "cardio-068",
    "name": "Walking Intervals",
    "category": "cardio",
    "focus": "Outdoor Cardio",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-001",
    "name": "Low Impact Squat to Reach",
    "category": "hiit",
    "focus": "Low Impact HIIT",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-002",
    "name": "Step Back Burpee",
    "category": "hiit",
    "focus": "Low Impact HIIT",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-003",
    "name": "Marching High Knees",
    "category": "hiit",
    "focus": "Low Impact HIIT",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-004",
    "name": "Low Impact Skater Step",
    "category": "hiit",
    "focus": "Low Impact HIIT",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-005",
    "name": "Step Out Plank Jack",
    "category": "hiit",
    "focus": "Low Impact HIIT",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-006",
    "name": "Walkout to Plank",
    "category": "hiit",
    "focus": "Low Impact HIIT",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-007",
    "name": "Standing Mountain Climber",
    "category": "hiit",
    "focus": "Low Impact HIIT",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-008",
    "name": "Squat to Calf Raise",
    "category": "hiit",
    "focus": "Low Impact HIIT",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-009",
    "name": "Standing Punch Combo",
    "category": "hiit",
    "focus": "Low Impact HIIT",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-010",
    "name": "Lateral Step and Reach",
    "category": "hiit",
    "focus": "Low Impact HIIT",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-011",
    "name": "Alternating Knee Drive",
    "category": "hiit",
    "focus": "Low Impact HIIT",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-012",
    "name": "Step Back Lunge to Knee Raise",
    "category": "hiit",
    "focus": "Low Impact HIIT",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-013",
    "name": "Burpee",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-014",
    "name": "Mountain Climber",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-015",
    "name": "Squat Jump",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-016",
    "name": "Jumping Jack",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-017",
    "name": "Plank Jack",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-018",
    "name": "High Knees",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-019",
    "name": "Skater Hop",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-020",
    "name": "Jump Lunge",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-021",
    "name": "Fast Feet",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-022",
    "name": "Bear Crawl",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-023",
    "name": "Lateral Shuffle",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-024",
    "name": "Reverse Lunge to Knee Drive",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-025",
    "name": "Sprawl",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-026",
    "name": "Plank Up Down",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-027",
    "name": "Speed Squat",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-028",
    "name": "Toe Tap to Step",
    "category": "hiit",
    "focus": "Bodyweight HIIT",
    "equipment": "Bodyweight",
    "level": "Intermediate"
  },
  {
    "id": "hiit-029",
    "name": "Tuck Jump",
    "category": "hiit",
    "focus": "Plyometrics",
    "equipment": "Bodyweight",
    "level": "Advanced"
  },
  {
    "id": "hiit-030",
    "name": "Broad Jump",
    "category": "hiit",
    "focus": "Plyometrics",
    "equipment": "Bodyweight",
    "level": "Advanced"
  },
  {
    "id": "hiit-031",
    "name": "Box Jump",
    "category": "hiit",
    "focus": "Plyometrics",
    "equipment": "Bodyweight",
    "level": "Advanced"
  },
  {
    "id": "hiit-032",
    "name": "Depth Jump",
    "category": "hiit",
    "focus": "Plyometrics",
    "equipment": "Bodyweight",
    "level": "Advanced"
  },
  {
    "id": "hiit-033",
    "name": "Lateral Bound",
    "category": "hiit",
    "focus": "Plyometrics",
    "equipment": "Bodyweight",
    "level": "Advanced"
  },
  {
    "id": "hiit-034",
    "name": "Split Squat Jump",
    "category": "hiit",
    "focus": "Plyometrics",
    "equipment": "Bodyweight",
    "level": "Advanced"
  },
  {
    "id": "hiit-035",
    "name": "Single Leg Hop",
    "category": "hiit",
    "focus": "Plyometrics",
    "equipment": "Bodyweight",
    "level": "Advanced"
  },
  {
    "id": "hiit-036",
    "name": "Frog Jump",
    "category": "hiit",
    "focus": "Plyometrics",
    "equipment": "Bodyweight",
    "level": "Advanced"
  },
  {
    "id": "hiit-037",
    "name": "Lateral Hurdle Hop",
    "category": "hiit",
    "focus": "Plyometrics",
    "equipment": "Bodyweight",
    "level": "Advanced"
  },
  {
    "id": "hiit-038",
    "name": "Plyometric Push Up",
    "category": "hiit",
    "focus": "Plyometrics",
    "equipment": "Bodyweight",
    "level": "Advanced"
  },
  {
    "id": "hiit-039",
    "name": "Burpee Box Jump",
    "category": "hiit",
    "focus": "Plyometrics",
    "equipment": "Bodyweight",
    "level": "Advanced"
  },
  {
    "id": "hiit-040",
    "name": "Skater Jump with Floor Touch",
    "category": "hiit",
    "focus": "Plyometrics",
    "equipment": "Bodyweight",
    "level": "Advanced"
  },
  {
    "id": "hiit-041",
    "name": "Dumbbell Thruster",
    "category": "hiit",
    "focus": "Weighted HIIT",
    "equipment": "Dumbbells",
    "level": "Intermediate"
  },
  {
    "id": "hiit-042",
    "name": "Dumbbell Swing",
    "category": "hiit",
    "focus": "Weighted HIIT",
    "equipment": "Dumbbells",
    "level": "Intermediate"
  },
  {
    "id": "hiit-043",
    "name": "Dumbbell Burpee Deadlift",
    "category": "hiit",
    "focus": "Weighted HIIT",
    "equipment": "Dumbbells",
    "level": "Intermediate"
  },
  {
    "id": "hiit-044",
    "name": "Alternating Dumbbell Snatch",
    "category": "hiit",
    "focus": "Weighted HIIT",
    "equipment": "Dumbbells",
    "level": "Intermediate"
  },
  {
    "id": "hiit-045",
    "name": "Dumbbell Clean and Press",
    "category": "hiit",
    "focus": "Weighted HIIT",
    "equipment": "Dumbbells",
    "level": "Intermediate"
  },
  {
    "id": "hiit-046",
    "name": "Dumbbell Squat to Press",
    "category": "hiit",
    "focus": "Weighted HIIT",
    "equipment": "Dumbbells",
    "level": "Intermediate"
  },
  {
    "id": "hiit-047",
    "name": "Dumbbell Renegade Row",
    "category": "hiit",
    "focus": "Weighted HIIT",
    "equipment": "Dumbbells",
    "level": "Intermediate"
  },
  {
    "id": "hiit-048",
    "name": "Dumbbell Reverse Lunge to Curl",
    "category": "hiit",
    "focus": "Weighted HIIT",
    "equipment": "Dumbbells",
    "level": "Intermediate"
  },
  {
    "id": "hiit-049",
    "name": "Dumbbell Deadlift to Row",
    "category": "hiit",
    "focus": "Weighted HIIT",
    "equipment": "Dumbbells",
    "level": "Intermediate"
  },
  {
    "id": "hiit-050",
    "name": "Kettlebell Swing Intervals",
    "category": "hiit",
    "focus": "Kettlebell HIIT",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "hiit-051",
    "name": "Kettlebell Clean and Press Intervals",
    "category": "hiit",
    "focus": "Kettlebell HIIT",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "hiit-052",
    "name": "Kettlebell Goblet Squat Intervals",
    "category": "hiit",
    "focus": "Kettlebell HIIT",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "hiit-053",
    "name": "Kettlebell High Pull",
    "category": "hiit",
    "focus": "Kettlebell HIIT",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "hiit-054",
    "name": "Kettlebell Snatch Intervals",
    "category": "hiit",
    "focus": "Kettlebell HIIT",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "hiit-055",
    "name": "Kettlebell Deadlift to High Pull",
    "category": "hiit",
    "focus": "Kettlebell HIIT",
    "equipment": "Kettlebell",
    "level": "Intermediate"
  },
  {
    "id": "hiit-056",
    "name": "Assault Bike HIIT",
    "category": "hiit",
    "focus": "HIIT Cardio",
    "equipment": "Cardio machine",
    "level": "Intermediate"
  },
  {
    "id": "hiit-057",
    "name": "Rower Sprint Intervals",
    "category": "hiit",
    "focus": "HIIT Cardio",
    "equipment": "Cardio machine",
    "level": "Intermediate"
  },
  {
    "id": "hiit-058",
    "name": "Treadmill HIIT Intervals",
    "category": "hiit",
    "focus": "HIIT Cardio",
    "equipment": "Cardio machine",
    "level": "Intermediate"
  },
  {
    "id": "hiit-059",
    "name": "SkiErg HIIT",
    "category": "hiit",
    "focus": "HIIT Cardio",
    "equipment": "Cardio machine",
    "level": "Intermediate"
  },
  {
    "id": "hiit-060",
    "name": "Spin Bike Sprint Intervals",
    "category": "hiit",
    "focus": "HIIT Cardio",
    "equipment": "Cardio machine",
    "level": "Intermediate"
  },
  {
    "id": "hiit-061",
    "name": "Stair Climber HIIT",
    "category": "hiit",
    "focus": "HIIT Cardio",
    "equipment": "Cardio machine",
    "level": "Intermediate"
  },
  {
    "id": "hiit-062",
    "name": "10 Minute Beginner HIIT Workout",
    "category": "hiit",
    "focus": "Full Workouts",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-063",
    "name": "15 Minute Low Impact HIIT Workout",
    "category": "hiit",
    "focus": "Full Workouts",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-064",
    "name": "20 Minute No Jumping HIIT Workout",
    "category": "hiit",
    "focus": "Full Workouts",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-065",
    "name": "20 Minute Full Body HIIT Workout",
    "category": "hiit",
    "focus": "Full Workouts",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-066",
    "name": "30 Minute HIIT No Equipment",
    "category": "hiit",
    "focus": "Full Workouts",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-067",
    "name": "40 Minute Full Body HIIT Workout",
    "category": "hiit",
    "focus": "Full Workouts",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-068",
    "name": "Tabata 20 Seconds On 10 Seconds Off",
    "category": "hiit",
    "focus": "Full Workouts",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-069",
    "name": "EMOM Beginner Conditioning",
    "category": "hiit",
    "focus": "Full Workouts",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-070",
    "name": "AMRAP Bodyweight Workout",
    "category": "hiit",
    "focus": "Full Workouts",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-071",
    "name": "HIIT Warm Up Routine",
    "category": "hiit",
    "focus": "Full Workouts",
    "equipment": "Bodyweight",
    "level": "Beginner"
  },
  {
    "id": "hiit-072",
    "name": "HIIT Cool Down Routine",
    "category": "hiit",
    "focus": "Full Workouts",
    "equipment": "Bodyweight",
    "level": "Beginner"
  }
];
