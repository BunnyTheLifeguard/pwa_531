let oneRepMax: number

const calculateMax = (weight: number, reps: number): number => {
  console.log(weight, reps)
  switch (reps) {
    case 2:
      oneRepMax = weight * 0.95
      break
    case 3:
      oneRepMax = weight * 0.9
      break
    case 4:
      oneRepMax = weight * 0.88
      break
    case 5:
      oneRepMax = weight * 0.86
      break
    case 6:
      oneRepMax = weight * 0.84
      break
    case 7:
      oneRepMax = weight * 0.82
      break
    case 8:
      oneRepMax = weight * 0.78
      break
    case 9:
      oneRepMax = weight * 0.76
      break
    case 10:
      oneRepMax = weight * 0.73
      break
  }

  return oneRepMax
}

export default calculateMax
