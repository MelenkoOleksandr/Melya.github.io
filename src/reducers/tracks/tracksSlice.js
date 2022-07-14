import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tracks: []
}

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        setTracks: (state, action) => {
            state.tracks = action.payload
        },
        addTrack: (state, action) => {
            state.tracks.unshift(action.payload)
        },
        removeTrack: (state, action) => {
            state.tracks = state.tracks.filter( track => track.id !== action.payload)
        },
        updateTrack: (state, action) => {
            state.tracks = state.tracks.map(track => {
                if (track.id === action.payload.id) {
                    return action.payload
                }
                return track
            })
        }
    }
})

export const { addTrack, removeTrack, updateTrack, setTracks } = tracksSlice.actions;

export default tracksSlice.reducer