import React from 'react'
import './Main.css'
import cargo from '../images/adir-Cargo-Insurance 1.png'
import card1 from '../images/card0.png'
import card2 from '../images/card1.png'
import card3 from '../images/card2.png'
import card21 from '../images/card2 - 13.png'
import card22 from '../images/card2- 14.png'
import card23 from '../images/card2- 15.png'

const Main = () => {
    const data = [
        {
            id : 1 , 
            img : card1 ,
            title : 'Поиск производителей по товару',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.'
        },
        {
            id : 2 , 
            img : card2 ,
            title : 'Поиск конкретного производителя',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.'        },
        {
            id : 3 , 
            img : card3 ,
            title : 'Доставка образцов товаров',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.'
        }
    ]
    let card = data?.map((el) => 
    <div className="card">
    <img src={el.img} alt="" />
    <h3>{el.title}</h3>
    <p>{el.p}</p>
    </div>
    )


    const Carddata = [
        {
            id : 1 , 
            img : card21 ,
            title : 'Поиск производителей по товару',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.',
            h4: '20 000 руб.'

        },
        {
            id : 2 , 
            img : card22 ,
            title : 'Поиск конкретного производителя',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.' ,      
            h4: '18 000 руб.'
 
        },
        {
            id : 3 , 
            img : card23 ,
            title : 'Доставка образцов товаров',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.',
            h4: '20 000 руб.'

        }
    ]

    let pcard = Carddata?.map((el) => 
    <div className="card2">
    <img src={el.img} alt="" />
      <div className="card2-parag">
      <h3>{el.title}</h3>
    <p>{el.p}</p>
    <h4>{el.h4}</h4>
      </div>
</div>
    )






  return (
    <>
    <div className='hero'>
        <div className="container">
            <div className="hero-content">
                <div className="hero-left">
                    <h1>Поставщик Дальнего Востока</h1>
                    <p>Наши клиенты получают полный спектр услуг по работе с Китаем.  Начиная с подбора производителя заканчивая доставкой товара до двери.  Настолько прозрачных сделок с Китаем вы еще не осуществляли.</p>
                    <a href="">Узнать больше</a>
                </div>
                <div className="hero-right">
                    <img src={cargo} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className="container">
    <div className="cards">
      {card}
    </div>
    </div>
    <div className="container">
        <div className="title">
            <h1>Выполненные работы</h1>
            <p>Мы собрали информацию по грузам, которые мы уже доставили. У нас специальный подход к каждому виду товаров.</p>
        </div>
        <div className="cards-2">
          {pcard}
        </div>
    </div>
    </>
  )
}

export default Main