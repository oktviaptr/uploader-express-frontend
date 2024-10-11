import { useState } from 'react'
import { Input } from './components/Input'
import { Label } from './components/Label'
import { SubmitDemo } from './components/SubmitForm'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <Toaster/>
    <div className='flex items-center justify-center h-screen'>
      <SubmitDemo/>
    </div>
    </>
  )
}

export default App
