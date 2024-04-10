import React , {useState} from 'react'
import './Footer.css'
const data = [
    {
      title: '',
      links: ["Каталог" ,"о компании", "Индивидуальная ", "Партнерам"]
    },
    {
      title: [],
      links: ["2D, 3D модели","Шоу-румы", "Дилерам", "Контакты", "Конфигуратор"]
    },
    {
      title: "",
      links: ["+38 (099)-638-45-37"]
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
      <div className="container">
     <div className='foter'>
      <h1>LOGO</h1>
        {items}
     </div>
      </div>
    </footer>
  )
}

export default Footer