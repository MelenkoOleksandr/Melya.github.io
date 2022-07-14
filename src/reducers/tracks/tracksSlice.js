import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    tracks: [{ id: 1, trackName: 'Track1' }, { id: 2, trackName: 'Track2' }],
}

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        addTrack: (state, action) => {
            state.tracks.unshift(action.payload)
        },
        removeTrack: (state, action) => {
            state.tracks = state.tracks.filter( track => track.id !== action.payload)
        },
    }
})

export const {addTrack, removeTrack} = tracksSlice.actions;

export default tracksSlice.reducer