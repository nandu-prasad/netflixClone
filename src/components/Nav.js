import React, {useState,useEffect} from 'react'
import './Nav.css'

function Nav() {

    const [show,setShow]=useState(false)

    useEffect(()=>{
         window.addEventListener('scroll',()=>{
            if(window.scrollY>500){
                setShow(true)
            }
            else{
                setShow(false)
            }
         })
    },[])
  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img className='nav-img' src='https://linkshortner.net/FEdTa'/>
    </div>
  )
}

export default Nav