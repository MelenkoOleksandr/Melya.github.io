import { combineReducers } from '@reduxjs/toolkit'
import tracksReducer from './tracks/tracksSlice'

export default combineReducers({
    tracks: tracksReducer
})
