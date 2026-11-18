import '../css/Department.css'

const departmentList = [
    { id: 1, icon: 'GI.png', title: '소화기내과' , desc: '위염 · 역류성 식도염' },
    { id: 2, icon: 'PUL.png', title: '호흡기내과' , desc: '감기 · 천식 · 비염' },
    { id: 3, icon: 'CV.png', title: '순환기내과' , desc: '고혈압 · 고지혈증' },
    { id: 4, icon: 'ENDO.png', title: '내분비내과' , desc: '당뇨 · 갑상선' },
    { id: 5, icon: 'Medical-Checkup.png', title: '건강검진' , desc: '국가 · 종합검진' },
    { id: 6, icon: 'Vaccine.png', title: '예방접종·수액' , desc: '독감 · 대상포진 · 수액' },
]

function Department() {

    return(
        <section className='department'>
            <div className='department-text'>
                <p>DEPARTMENT</p>
                <h2>진료 과목</h2>
                <p>증상에 맞는 진료과목을 확인해 보세요</p>
            </div>

            <div className='department_box'>
                <ul className='department_list'>
                    {departmentList.map((item) => (
                        <li
                            key={item.id}
                            className='department-item'
                        >
                            <img src={`${import.meta.env.BASE_URL}${item.icon}`} alt='' />
                            <p>{item.title}</p>
                            <p>{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Department