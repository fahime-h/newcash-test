import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
import Title from './Title'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10&nat=gb")
    .then(x => x.json())
    .then(z => setUsers(z.results))
    .catch(y => console.log(y));
  },[])

  return (
    <>
      <Title/>
      <div className='grid grid-cols-3 gap-5 py-16 px-24 lg:grid-cols-2 sm:grid-cols-1 sm:px-16 md:px-16'>
      {users.map((item, index) => (
        <Card data={item} key={index}/>
      ))}
      </div>
    </>
  )
}

export default App
