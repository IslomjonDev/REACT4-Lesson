import React from 'react'
import './Header.css'
const Header = () => {
    const navLink = ["Home" , "About" , "Blog" ,"Contact" , "Help"]
    let links =  navLink.map((value , inx)=>{
        return <li key={inx}><a href="">{value}</a></li>
    })

  return (
    <>
    
    <header>
        <div className="container">
            <div className="navbar">
                <div className="nav-logo">
                    <h1>грузовик</h1>
                </div>
                <div className="navlink">
                    {links}
                </div>
            </div>
        </div>
    </header>
    
    
    </>
  )
}

export default Header