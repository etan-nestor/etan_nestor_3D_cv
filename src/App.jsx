import { useState } from 'react'
import MyBook from './components/MyBook'
import BgTexture from './assets/texture2.jpg'


// My bgTexture styles

const BgTextureStyle={
  backgroundImage:`url(${BgTexture})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
  minHeight:"100vh",
  width:"100%",
}

// My Book components

function App() {

  return (
    <>
      <div style={BgTextureStyle} className='w-full h-full flex justify-center items-center'>
        <MyBook />
      </div>
    </>
  )
}

export default App
