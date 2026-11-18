import { useState } from 'react'
import '../css/style.css'
const callIcon = `${import.meta.env.BASE_URL}call.png`
const calenderIcon = `${import.meta.env.BASE_URL}calender.png`
const btnMenuIcon = `${import.meta.env.BASE_URL}btnMenu.png`

type MenuGroup = {
    title?: string        // ? = 있어도 되고 없어도 됨
    items: string[]
}

type Menu = {
    title: string
    groups: MenuGroup[]
}

const menus: Menu[] = [
    { title: '병원소개', groups: [{ items: ['인사말', '의료진 소개', '장비 소개', '병원 둘러보기'] }] },
    { title: '진료과목', groups: [{ items: ['소화기내과', '호흡기내과', '순환기내과', '내분비내과', '예방접종·수액'] }] },
    { title: '내시경·검사',
        groups: [
            { title: '내시경', items: ['위내시경', '대장내시경', '내시경 전 준비사항'] },
            { title: '건강검진', items: ['국가 건강검진', '종합 건강검진', '검진 결과 조회'] },
        ]
    },
    { title: '이용안내', groups: [{ items: ['진료시간', '진료안내', '진료예약', '오시는 길', '비급여 안내', '서류발급'] }] },
    { title: '커뮤니티', groups: [{ items: ['공지사항', '건강정보', '자주 묻는 질문', '온라인 상담'] }] },
]

function Header() {

    const [open, setOpen] = useState(false)   // 메뉴 판 열림 여부

    return (
        <header>
            <div className='topbar'>
                <div className='inner'>
                    <ul className='topbar_info'>
                        <li><img src={callIcon} alt=''/>대표전화 02-000-0000</li>
                        <li>오늘 진료 09:00 – 18:30</li>
                        <li>야간진료 월 · 수 ~20:00</li>
                    </ul>
                    <ul className='topbar_util'>
                        <li><a href="#">로그인</a></li>
                        <li><a href="#">회원가입</a></li>
                        <li><a href="#">KOR / ENG</a></li>
                    </ul>
                </div>
            </div>

            <div className={open ? 'navbar is-open' : 'navbar'} onMouseLeave={() => setOpen(false)}>
                <div className='inner'>
                    <div className='navbar_menu'>
                        <h1>Logo</h1>

                        <ul className='navbar_menu-item' onMouseEnter={() => setOpen(true)}>
                            {menus.map((menu) => (
                                <li key={menu.title} className='gnb_item'>
                                    <a href="#" className='gnb_title'>{menu.title}</a>

                                    {/* 하위 메뉴 열 */}
                                    <div className='gnb_sub'>
                                        {menu.groups.map((group, i) => (
                                            <ul key={i} className='gnb_group'>
                                                {group.title && <li className='gnb_group-title'>[{group.title}]</li>}
                                                {group.items.map((sub) => (
                                                    <li key={sub}><a href="#" className='gnb_link'>{sub}</a></li>
                                                ))}
                                            </ul>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='navber_item'>
                        <button className='navbar_btn-reserve'>
                            <img src={calenderIcon} alt='' />
                            <span>진료예약</span>
                        </button>

                        <div className='navbar_btn-menu'>
                            <img src={btnMenuIcon} alt='' />
                        </div>
                    </div>
                </div>

                {/* 메뉴 판 배경 + 남색 띠 */}
                <div className='mega'>
                    <div className='mega_bg'></div>
                    <div className='mega_bar'>
                        <div className='inner'>
                            <strong>진료 시간</strong>
                            <span>평일 09:00 – 18:30</span>
                            <span>야간 (월 · 수) ~20:00</span>
                            <span>토 09:00 – 13:30</span>
                            <span>점심 13:00 – 14:00</span>
                            <span>일 · 공휴일 휴진</span>
                            <span className='mega_tel'><img src={callIcon} alt='' />대표전화 02-000-0000</span>
                            <button className='mega_btn'>
                                <img src={calenderIcon} alt='' />진료예약
                            </button>
                        </div>
                    </div>
                </div>

                {/* 뒤 화면 어둡게 */}
                <div className='mega_dim'></div>
            </div>
        </header>
    )
}

export default Header
