import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'



function App() {
  const [count, setCount] = useState(0)
  const [jokel, setJokel] = useState([])     

  // useEffect(() => {
  //   // const datafetchi = async ()=>{
  //   //   let r = await fetch('http://localhost:3000/jokes', {method:"GET", headers:{'Content-Type': 'application/json'}})
  //   //   let res = await r.json()
  //   //   setJokel(res)
  //   //   return res
  //   // }
  //   // datafetchi()

  // fetch('/jokes', {method:"GET", headers:{'Content-Type': 'application/json'}}).then((data)=>{
  //   return data.json()
  // }).then((d)=>{
  //   console.log(d)
  //   setJokel(d)
  // })
  // }, [])

  useEffect(() => {
    axios.get('/jokes').then((req)=>{
      // console.log(req)
      setJokel(req.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  

  return (
    <>
    {/* {console.log(jokel)} */}
      <div className='main'>
        {/* Hello Guys */}
        <ul className='ullist'>
        {
          (jokel.length>1)&&(jokel.map((item)=>{
            return <li key={item.id}>{item.title}<br/>{item.desc}</li>
          }))
        }
        </ul>
      </div>
    </>
  )
}

export default App
