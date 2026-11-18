import '../css/Mainhero.css'

function Mainhero() {

    return(
        <section className='main_hero'>
            <div className='inner'>
                <div className='main_hero-text'>
                    <p>소화기 내시경 특화 내과</p>
                    <p>
                        검진부터 내시경까지,<br/>
                        편안하게 한 번에
                    </p>
                    <p>
                        수면 위·대장내시경부터 만성질환 관리까지,<br/>
                        가까운 곳에서 믿고 찾는 동네 주치의가 되겠습니다.
                    </p>
                </div>

                <div className='main_hero-btn'>
                    <button className='hero-btn-reservation'>
                        진료예약
                    </button>

                    <button className='hero-btn-guide'>
                        진료안내
                    </button>
                </div>               
            </div>
        </section>
    )
}

export default Mainhero
