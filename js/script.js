// querySelector - получение конкретного элемента из html
const hour = document.querySelector('.h');
const min = document.querySelector('.m');
const sec = document.querySelector('.s');

const hoursNum = document.querySelector('.hours');
const minNum = document.querySelector('.minutes');
// Функция для запуска часов 
minNum.addEventListener('click', () => {

})

function clock() {
    const time = new Date();
    const second = time.getSeconds() * 6;
    const minutes = time.getMinutes() * 6;
    const hours = time.getHours() * 30;
    // 
    sec.style = `transform: rotate(${second}deg);`;
    min.style = `transform: rotate(${minutes}deg);`;
    hour.style = `transform: rotate(${hours}deg);`;
    // innerHTML 

    // if (time.getSeconds() < 10) {
    //     secNum.innerHTML = '0' + time.getSeconds();
    // } else {
    //     secNum.innerHTML = time.getSeconds();
    // }
    // ? : - тернарные операторы
    hoursNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    // 
    setTimeout(() => {
        clock();
    }, 1000);

}
clock();



// 

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('click', (e) => {
        e.preventDefault();

        for (let ix = 0; ix < tabs.length; ix++) {
            links[ix].classList.remove('active');
            tabs[ix].classList.remove('active');
        }
        links[i].classList.add('active');
        tabs[i].classList.add('active');

    });
}



// links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const attr = link.getAttribute('data-tab');
//         tabs.forEach((tab) => { tab.classList.remove('active') });
//         links.forEach((tab) => { tab.classList.remove('active') });
//         link.classList.add('active');
//         tabs.forEach((tab) => {
//             if (tab.getAttribute('data-tab') == attr) {
//                 tab.classList.add('active')
//             }
//         });
//     });
// });




const stopWatchBtn = document.querySelector('.stopwatch__btn'),
      stopWatchSec = document.querySelector('.stopwatch__seconds'),
      stopWatchMin = document.querySelector('.stopwatch__minutes'),
      stopWatchHours = document.querySelector('.stopwatch__hours');

stopWatchBtn.style = 'background:purple;color:white';

stopWatchBtn.addEventListener('click', ()=>{

    if (stopWatchBtn.innerHTML == 'start') {
        stopWatchBtn.innerHTML = 'stop';
        stopWatchBtn.style = 'background:orange;color:white';

        let i = 0;

        stopWatch(stopWatchBtn, i);

    }else if (stopWatchBtn.innerHTML == 'stop') {
        stopWatchBtn.innerHTML = 'clear';
        stopWatchBtn.style = 'background:blue;color:white';
    }else{
        stopWatchBtn.innerHTML = 'start';
        stopWatchBtn.style = 'background:purple;color:white';
        stopWatchSec.innerHTML = 0;
        stopWatchMin.innerHTML = 0;
        stopWatchHours.innerHTML = 0;
    }

})


function stopWatch(el,i) {
    if (el.innerHTML == 'stop') {
        if (i == 60) {
            i = 0;
            stopWatchSec.innerHTML = i;

            if (stopWatchMin.innerHTML == 59) {
                stopWatchMin.innerHTML = 0;
                stopWatchHours.innerHTML++;
                
            }else{
                stopWatchMin.innerHTML++;
            }
        }else{
            i++;
            stopWatchSec.innerHTML = i;
        }

        setTimeout(() => {
            stopWatch(el, i);
        }, 1000);
    }
    
}

