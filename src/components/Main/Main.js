import React from 'react'
import './Main.css'
import cargo from '../images/adir-Cargo-Insurance 1.png'
import card1 from '../images/card0.png'
import card2 from '../images/card1.png'
import card3 from '../images/card2.png'
import card21 from '../images/card2 - 13.png'
import card22 from '../images/card2- 14.png'
import card23 from '../images/card2- 15.png'
import postavkiCard1 from '../images/Rectangle 32.png'
import postavkiCard2 from '../images/Rectangle 33 .png'
import postavkiCard3 from '../images/Rectangle 34.png'
import sponsors1 from '../images/logotip1.svg'
import sponsors2 from '../images/logotip2.png'
import sponsors3 from '../images/logotip3.svg'
import sponsors4 from '../images/logotip4.png'
import sponsors5 from '../images/5.png'
import sponsors6 from '../images/logotip5.png'
import sponsors7 from '../images/logotip6.png'
import sponsors8 from '../images/logotip7.png'
import rec from '../images/Rectangle 22.png'
import person1 from '../images/person1.png'
import person2 from '../images/Ellipse 11.png'
import person3 from '../images/evan.png'
import person4 from '../images/Ellipse 10.png'
import person5 from '../images/vektor.png'
import person6 from '../images/Ellipse 15 (1).png'
import zill from '../images/zilnaxx.png'





import insta from '../images/instagram.png'
import vectr from '../images/Vector.png'
import link from '../images/linkedin.png'



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



    const postavkiData = [
        {
            id : 1 , 
            img : postavkiCard1 ,
            title : 'Предложение от продавца',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ',

        },
        {
            id : 2 , 
            img : postavkiCard2 ,
            title : 'Доставка',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ',
 
        },
        {
            id : 3 , 
            img : postavkiCard3 ,
            title : 'Установка у клиента',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ',

        }
    ]


    let postavkicard = postavkiData?.map((el) => 
    <div className="postavki-card">
    <div className="postavki-left">
    <img src={el.img} alt="" />
    </div>
    <div className="postavki-right">
        <h3>{el.title}</h3>
        <p>{el.p} </p>
    </div>
</div>
    )



    const sponsorsData = [
        {
            id : 1 , 
            img : sponsors1 ,
            title : 'Росатом',
            p: 'Корпорация атомной энергии',

        },
        {
            id : 2 , 
            img : sponsors2 ,
            title : 'Газпром',
            p: 'Энергетическая компания',
 
        },
        {
            id : 3 , 
            img : sponsors3 ,
            title : 'Роснефть',
            p : 'Нефтегазовая компания'
        },
        {
            id : 4 , 
            img : sponsors4 ,
            title : 'Роскосмос',
            p : 'Корпорация в космической отрасли'

        },
        {
            id : 5 , 
            img : sponsors5 ,
            title : 'Лукойл',
            p: 'Нефтяная компания'
        },
        {
            id : 6 , 
            img : sponsors6 ,
            title : 'Интер РАО',
            p: 'Энергетическая компания'

        },
        {
            id : 7 , 
            img : sponsors7 ,
            title : 'Ростех',
        p:'Промышленная корпорация'

        },
        {
            id : 8 , 
            img : sponsors8 ,
            title : 'Банк ВТБ',
            p:'Коммерческий банк '

        },
    ]

    let sponsorsCard = sponsorsData?.map((el) => 
    <div className="sponsors-card">
    <img src={el.img} alt="" />
    <h4>{el.title}</h4>
    <p>{el.p}</p>
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
    <div className="container">
        <div className="postavki">
            <h1>
            Этапы поставки 
            </h1>

        </div>card
        <div className="postavki-cards">
           {postavkicard}
        </div>
    </div>
    <div className="container">
      <div className="sponsors">
        <h1>Нам доверяют</h1>
      </div>
      <div className="sponsors-cards">
      {sponsorsCard}
      </div>
    </div>
    <div className="container">
        <div className="company">
            <h1>Сотрудники компании</h1>
            <div className="company-cards">
                <div className="company-card">
                    <div className="company-left">
                      <img src={rec} alt="" />
                      <img src={person1} alt="" />
                    </div>
                    <div className="company-right">
                        <h2>Антон Макаров</h2>
                        <p>Руководитель компании</p>
                        <span>
                            <img src={insta} alt="" />
                            <img src={vectr} alt="" />
                            <img src={link} alt="" />
                        </span>
                    </div>
                </div>
                <div className="company-card">
                    <div className="company-left">
                      <img src={rec} alt="" />
                      <img src={person2} alt="" />
                    </div>
                    <div className="company-right">
                        <h2>Елена Валерьева</h2>
                        <p>Главный бухгалтер</p>
                        <span>
                            <img src={insta} alt="" />
                            <img src={vectr} alt="" />
                            <img src={link} alt="" />
                        </span>
                    </div>
                </div>
                <div className="company-card">
                    <div className="company-left">
                      <img src={rec} alt="" />
                      <img src={person3} alt="" />
                    </div>
                    <div className="company-right">
                        <h2>Иван Аркадьев </h2>
                        <p>Менеджер по закупкам</p>
                        <span>
                            <img src={insta} alt="" />
                            <img src={vectr} alt="" />
                            <img src={link} alt="" />
                        </span>
                    </div>
                </div>
                <div className="company-card">
                    <div className="company-left">
                      <img src={rec} alt="" />
                      <img src={person4} alt="" />
                    </div>
                    <div className="company-right">
                        <h2>Борис Вавилов</h2>
                        <p>Бухгалтер</p>
                        <span>
                            <img src={insta} alt="" />
                            <img src={vectr} alt="" />
                            <img src={link} alt="" />
                        </span>
                    </div>
                </div>
                <div className="company-card">
                    <div className="company-left">
                      <img src={rec} alt="" />
                      <img src={person6} alt="" />
                    </div>
                    <div className="company-right">
                        <h2>Алина Кравец</h2>
                        <p>Сотрудник отдела кадров</p>
                        <span>
                            <img src={insta} alt="" />
                            <img src={vectr} alt="" />
                            <img src={link} alt="" />
                        </span>
                    </div>
                </div>
                <div className="company-card">
                    <div className="company-left">
                      <img src={rec} alt="" />
                      <img src={person5} alt="" />
                    </div>
                    <div className="company-right">
                        <h2>Виктор Козуб</h2>
                        <p>Менеджер по закупкам</p>
                        <span>
                            <img src={insta} alt="" />
                            <img src={vectr} alt="" />
                            <img src={link} alt="" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <img className='zill' src={zill} alt="" />
    </div>
 </>
  )
}

export default Main