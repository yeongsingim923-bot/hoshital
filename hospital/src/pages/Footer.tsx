import '../css/Footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className='inner'>
            <div className='footer-left'>
                <h2 className='footer-logo'>
                    <img src={`${import.meta.env.BASE_URL}Logo2.png`} alt='편한속내과' />
                </h2>

                <div className='footer-info'>
                    <p>
                        <span>병원명 편한속내과</span>
                        <span>대표자 홍길동</span>
                        <span>사업자등록번호 000-00-00000</span>
                    </p>
                    
                    <p>
                        <span>[주소] 서울시 OO구 OO로 00, 0층</span>
                        <span>대표전화 02-000-0000</span>
                    </p>
                </div>

                <p className='copyright'>
                    © 편한속내과. All rights reserved.
                </p>
            </div>

            <ul className='footer-links'>
                <li><a href='#' className='strong'>개인정보처리방침</a></li>
                <li><a href='#'>이용약관</a></li>
                <li><a href='#'>비급여 안내</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer