const minutesConverter = (durationInMinutes: number): { hours: number; minutes: number } => {
  const hours = durationInMinutes / 60
  const roundedHours = Math.floor(hours)

  return {
    hours: roundedHours,
    minutes: Math.round((hours - roundedHours) * 60),
  }
}

export const getHumanDuration = (durationInMinutes: number): string => {
  const { hours, minutes } = minutesConverter(durationInMinutes)

  const duration = []

  if (minutes) {
    duration.push(`${minutes}м`)
  }

  if (hours) {
    duration.unshift(`${hours}ч`)

    if (!minutes) {
      duration.push('0м')
    }
  }

  return duration.join(' ')
}
