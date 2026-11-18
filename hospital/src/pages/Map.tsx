import '../css/Map.css'

function Maps() {

    return(
        <section className='location'>
            <div className='location-text'>
                <p>HOW TO GET HERE</p>
                <h2>오시는 길</h2>
            </div>

            <div className='map-box'>
                <img src={`${import.meta.env.BASE_URL}maps.png`} alt='편한속내과 오시는 길 지도' />
            </div>
        </section>
    )
}

export default Maps