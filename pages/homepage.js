import Nav from '../components/nav'
import Activity from '../components/activity'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import uploadModal from '../components/uploadModal'
import playlist from '../components/playlist'

import useSpotify from '../hooks/useSpotify'

const HomePage = () => {

  const [showUploadMusic, setUploadMusic] = useState(false)
  const [title, setTitle] = useState('')
  const [musicUrl, setMusicUrl] = useState('')
  const [songs, setSongs] = useState([])  

  const { newMusic, getSongs} = useSpotify(
    musicUrl,
    title,
    setTitle,
    setMusicUrl,
    setShowUploadMusic,
  )

  return (
    <div className='flex'>
      <Nav />
      <div className='w-full'>
        <Header setShowUploadMusic = {setShowUploadMusic}/>
        <Playlist/>
        {/* <PlayerControls /> */}
        {showUploadMusic && (
          <uploadModal
            title={title}
            setTitle={setTitle}
            setShowUploadMusic={setShowUploadMusic}
            musicUrl={musicUrl}
            setMusicUrl={setMusicUrl}
            newMusic={newMusic}
          />
        )}
      </div>
      <Activity />
    </div>
  )
}

export default HomePage
