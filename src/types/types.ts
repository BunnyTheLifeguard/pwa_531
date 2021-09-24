export interface Data {
  week: number
  day: number
  date: Date
  trainingDays: string[]
  unit: boolean
  squat: number
  deadlift: number
  benchpress: number
  overheadpress: number
}

export interface Workout {
  weights: number[]
  reps: string[]
}
