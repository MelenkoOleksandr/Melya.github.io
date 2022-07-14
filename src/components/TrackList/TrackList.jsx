import React from 'react'
import { useSelector } from 'react-redux';
import Track from '../Track/Track';

const TrackList = () => {
    const {tracks} = useSelector(state => state.tracks)
  return (
    <ul className='track-list'>
        {tracks.map(({id, trackName}) => (<Track id={id} trackName={trackName} />)) }
    </ul>
    
  )
}

export default TrackList