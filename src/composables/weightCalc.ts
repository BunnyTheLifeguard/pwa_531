const calculateWeights = (
  weight: number,
  week: number,
  unit: string,
  exercise: string
) => {
  let workout: { weights: Array<number>; reps: Array<string> }
  let set1: number
  let set2: number
  let set3: number

  // weight increase amounts after a completed 4 week cycle
  let upperBodyIncrease = 0
  let lowerBodyIncrease = 0

  if (unit === 'lbs') {
    upperBodyIncrease = 5
    lowerBodyIncrease = 10
  } else if (unit === 'kg') {
    upperBodyIncrease = 2.5
    lowerBodyIncrease = 5
  }

  if (week >= 5 && exercise === 'upper') {
    weight += upperBodyIncrease
  } else if (week >= 5 && exercise === 'lower') {
    weight += lowerBodyIncrease
  }
  // workout weight calculation depending on week
  if ((week - 1) % 4 === 0) {
    set1 = weight * 0.65
    set2 = weight * 0.75
    set3 = weight * 0.85
    workout = { weights: [set1, set2, set3], reps: ['5', '5', '5+'] }
    return workout
  } else if ((week - 2) % 4 === 0) {
    set1 = weight * 0.7
    set2 = weight * 0.8
    set3 = weight * 0.9
    workout = { weights: [set1, set2, set3], reps: ['3', '3', '3+'] }
    return workout
  } else if ((week - 3) % 4 === 0) {
    set1 = weight * 0.75
    set2 = weight * 0.85
    set3 = weight * 0.95
    workout = { weights: [set1, set2, set3], reps: ['5', '3', '1+'] }
    return workout
  } else if ((week - 4) % 4 === 0) {
    set1 = weight * 0.4
    set2 = weight * 0.5
    set3 = weight * 0.6
    workout = { weights: [set1, set2, set3], reps: ['5', '5', '5'] }
    return workout
  }
}

export default calculateWeights
