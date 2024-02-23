import React from 'react'
export default function Event({onPlayMusic,uploadImage}) {
  return (
    <>
       <button onClick={onPlayMusic}>play music</button>
       <button onClick={uploadImage}>upload image</button>
    </>
  )
}
