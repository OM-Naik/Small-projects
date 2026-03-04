import React, { useState } from 'react'
import Card from './components/card'

const App = () => {

  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [userDesc, setUserDesc] = useState('')

  const localData = JSON.parse(localStorage.getItem('all-users')) || []
  const [allUsers, setAllUsers] = useState(localData)

  const submitHandler = (e) => {
    e.preventDefault()

    const oldUsers = [...allUsers]

    oldUsers.push({ userName, userRole, userDesc, imageURL })

    setAllUsers(oldUsers)

    localStorage.setItem('all-users', JSON.stringify(oldUsers))

    setUserName('')
    setUserRole('')
    setUserDesc('')
    setImageURL('')
  }

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers]

    const conf = confirm('Are you really want to delete this element?')

    if (conf) {
      copyUsers.splice(idx, 1)
    } else {
      alert('element Not Deleted')
    }

    setAllUsers(copyUsers)
    localStorage.setItem('all-users', JSON.stringify(copyUsers))
  }


  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='px-2 py-2 flex flex-wrap'>

        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Enter your name' />

        <input
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Image URL' />

        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Enter Role' />

        <input
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Enter Description' />


        <button className=' px-5 py-2 text-xl active:scale-95 cursor-pointer font-semibold bg-emerald-700 rounded m-2 w-[97%]'>Create User</button>
      </form>
      <div className='px-4 py-10 gap-4 flex flex-wrap'>

        {allUsers.map(function (elem, idx) {
          return <Card idx={idx} elem={elem} deleteHandler={deleteHandler} />
        })}

      </div>
    </div>
  )
}

export default App