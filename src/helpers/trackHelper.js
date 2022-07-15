import dayjs from "dayjs";

export const getUpdatedTracksAfterClosing = tracks => tracks.map((track) => {
    if (track.isActive) {
        const additionalTime = dayjs().diff(track.previousInteraction, "s")
        return { ...track, time: track.time + additionalTime, previousInteraction: null };
    }
    return track
})

export const saveTracksOnClosing = tracks => localStorage.setItem("tracks", JSON.stringify(tracks.map(track => ({ ...track, previousInteraction: new Date() }))));
