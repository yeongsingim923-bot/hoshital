import '../css/Announcement.css'

const timeList = [
  { id: 1, day: '평일', time: '09:00 ~ 18:30' },
  { id: 2, day: '야간진료 (월 · 수)', time: '09:00 ~ 20:00' },
  { id: 3, day: '토요일', time: '09:00 ~ 13:30' },
  { id: 4, day: '점심시간', time: '13:00 ~ 14:00' },
  { id: 5, day: '일요일 · 공휴일', time: '휴진', closed: true },
]

const noticeList = [
  { id: 1, title: '[공지] 독감 예방접종 시작 안내', date: '2026.09.29' },
  { id: 2, title: '[공지] 추석 연휴 휴진 안내', date: '2026.09.25' },
  { id: 3, title: '[공지] 내시경 검사 예약 방법 안내', date: '2026.09.20' },
  { id: 4, title: '[공지] 야간진료 시간 안내', date: '2026.09.15' },
]

function Announcement() {

    return(
        <section className='announcement'>
            <div className='inner'>
                <h2>진료 시간  ·  공지사항</h2>

                <div className='notification-box'>
                    <div className='time-box'>
                        <ul className='time-list'>
                            {timeList.map((item) => (
                                <li 
                                    key={item.id}
                                >
                                    <span>{item.day}</span>
                                    <span className={item.closed ? 'closed' : ''}>{item.time}</span>   
                                </li>   
                            ))}
                        </ul>                            
                    </div>

                    <div className='notice-box'>
                        <div className='notice-head'>
                            <p>공지</p>
                            <a href='#'>+ 더보기</a>
                        </div>
                        <ul className='notice-list'>
                            {noticeList.map((item) => (
                                <li 
                                    key={item.id}
                                >
                                    <a href='#'>{item.title}</a>
                                    <span>{item.date}</span>
                                </li>   
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Announcement