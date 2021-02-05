//подключаемся к селекторам

const   watchBtn = document.querySelector('.stopwatch__btn'), 
        secondWatch = document.querySelector('.stopwatch__seconds'),
        minutesWatch = document.querySelector('.stopwatch__minutes'),
        hoursWatch = document.querySelector('.stopwatch__hours'),
        seconfInfo = document.querySelector('.tabsLink__span');
  
//ставим событие на нажатие start и менаем слово в кнопке

watchBtn.addEventListener('click', function () { 
    if (this.innerHTML == 'start') { 
        this.innerHTML = 'stop';
        seconfInfo.classList.add('active');
        let i = 0;
        setTimeout(() => stopWatch(this, i), 1000)

    } else if (this.innerHTML == 'stop') {
        seconfInfo.classList.remove('active');
        seconfInfo.classList.add('active_clear');
        this.innerHTML = 'clear';
    } else {
        seconfInfo.classList.remove('active_clear');
        secondWatch.innerHTML = 0;
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML = 0;
        this.innerHTML = 'start';
    }
})

//делаем так что бы секундомер сробатовал когда мы нажимаем на кнопку start

function stopWatch(el, i) { 
    if (el.innerHTML == 'stop') { 
        if (i == 60) { 
            i = 0;
            secondWatch.innerHTML = i 
            if (minutesWatch.innerHTML == 59) {  
                minutesWatch.innerHTML = 0;
                hoursWatch.innerHTML++;
            } else {
                minutesWatch.innerHTML++
            }
        } else {
            i++ 
            secondWatch.innerHTML = i; 
        }
        setTimeout(() => stopWatch(el, i), 10);
    } 
} 