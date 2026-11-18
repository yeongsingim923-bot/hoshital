import { useState } from 'react'
import '../css/QuickMenu.css'

const quickItems = [
        { icon: 'calender', text: '진료예약' },
        { icon: 'syringe',  text: '예방접종·수액' },
        { icon: 'location', text: '오시는 길' },
        { icon: 'clock',    text: '진료시간' },
        { icon: 'document', text: '서류발급' },
        { icon: 'receipt',  text: '비급여 안내' },
    ]

function QuickMenu() {

    const [ hovered,  setHovered ] = useState< number | null> (null)

    return(
        <div className='quick'>
            <div className='inner'>
                <ul className='quick-list'>
                    {quickItems.map((item, index) => (
                        <li 
                            key={item.text}
                            className='quick-item'
                        >
                            <a 
                                href="#"
                                className="quick_link"
                                onMouseEnter={() => setHovered(index)}  
                                onMouseLeave={() => setHovered(null)}
                            >
                                <img 
                                    src={hovered === index ? `${import.meta.env.BASE_URL}${item.icon}-white.png` : `${import.meta.env.BASE_URL}${item.icon}-blue.png`}
                                    alt="" 
                                    className="quick_icon"
                                />
                                <p>{item.text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default QuickMenu