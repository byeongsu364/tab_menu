const navList = document.querySelectorAll('.nav-list li')
const select = document.querySelectorAll('.select')

let i = 2;

init(i)

function init(q){
    navList[q].classList.add('on')
    select[q].classList.add('active')
}

function reset(){
    for(let i = 0; i < navList.length; i++){
        navList[i].classList.remove('on')
        select[i].classList.remove('active')
    }
}

navList.forEach((nav, index)=>{
    nav.addEventListener('click', (e)=>{
        e.preventDefault()
        
        reset()
        console.log(index)
        init(index)
    })
})
