const btns = document.querySelectorAll('button')
const dashboard = document.querySelector('.dashboard-cards')

btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        reset()
        let filter = e.target.textContent.toLowerCase()
        btn.classList.add('active')
        display(filter)
    })
})

function reset(){
    btns.forEach(btn=>{
        btn.classList.remove('active')
    })
}
function display(time){
    let footerTitle = ''
    if(time == 'weekly') footerTitle = 'week'
    else if(time == 'monthly') footerTitle = 'month'
    else footerTitle = 'year'


    let html = ''
    let row = 0;
    data.forEach((ele,index)=>{
        row ++ ;
        let title = ele.title.trim()
        let className = title.toLowerCase().indexOf(' ') == -1 ? title.toLowerCase() : title.toLowerCase().replace(' ','-')

        if(index % 2 == 0){
            html += `<div class="col detail card">`
        }
        html += `
        <div class='row ${className}'>
            <section>
                <div class='title'>
                    <h3>${title}</h3>
                    <span>...</span>
                </div>
                <div class='main'>
                    <p>${ele.timeframes[time].current}hrs</p>
                </div>
                <div class='footer'>
                    <p>Last ${footerTitle}-${ele.timeframes[time].previous}</p>
                </div>
            </section>
        </div>`
        if(row % 2 == 0) html += `</div>`
    })
    dashboard.innerHTML = ''
    dashboard.insertAdjacentHTML('beforeend',html)
}

display('weekly')