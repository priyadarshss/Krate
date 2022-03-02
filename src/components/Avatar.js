import React from 'react'
import { useMoralis } from 'react-moralis'

function Avatar({ username }) {
  const { user } = useMoralis()
  return (
    <img
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get('username')
      }.svg`}
      alt='avatar'
      style={{ height: '10px', width: '10px' }}
    />
  )
}

export default Avatar
