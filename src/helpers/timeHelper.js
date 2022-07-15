import dayjs from "dayjs"

const checkForZero = time => time < 10 ? "0" + time : time

export const parseSecondsToTimeString = seconds => {
    const hours = Math.floor(seconds / 3600)
    const hoursInSeconds = hours * 3600
    const minutes = Math.floor((seconds - hoursInSeconds) / 60)
    const minutesInSeconds = minutes * 60
    const secondsRemain = seconds - hoursInSeconds - minutesInSeconds

    return `${checkForZero(hours)}:${checkForZero(minutes)}:${checkForZero(secondsRemain)}`
}

export const getCurrentDate = () => dayjs().format('DD/MM/YYYY | HH:mm:ss')

