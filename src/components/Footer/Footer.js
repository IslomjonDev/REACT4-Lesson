import React , {useState} from 'react'
import './Footer.css'
const data = [
    {
      title: "Info",
      links: ["Formats", "Pricing", "FAQ", "Status"]
    },
    {
      title: "Getting started",
      links: ["Home", "About", "Contact", "Help"]
    },
    {
      title: "Resourses",
      links: ["Formats", "Pricing", "FAQ", "Status", "Blog"]
    },
  ]
function Footer() {
    let [count , setCount] = useState(0)
    console.log(count);

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDiscrement = () => {
        setCount(count - 1)
    }

    const handleClick = () => {
        alert("salom ")
    } 
    let items = data?.map((el , inx) => (
        <div key={inx}>
        <h3>{el.title}</h3>
        <ul>
            {
                el?.links?.map((link , index) => (
                    <li onClick={handleClick} key={index}><a href="">{link}</a></li>
                ))
            }
        </ul>
    </div>
    ))
  return (
    <footer>
     <div>
        {items}
     </div>
     <p>{count}</p>
     <button disabled = {count >= 10} onClick={handleIncrement}>Plus</button>
     <button disabled = {count <= 0} onClick={handleDiscrement}>Minus</button>
    </footer>
  )
}

export default Footer