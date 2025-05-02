'use strict';

const btns = document.querySelectorAll('.scenes button'); 
const divs = document.querySelectorAll('.scenes div'); 
const choices = [];


window.onload = function() {
    const gemteValg = localStorage.getItem('brugerValg'); 
    
    if (gemteValg) {
        const indlæsteValg = JSON.parse(gemteValg);
        for (let i = 0; i < indlæsteValg.length; i++) {
            choices.push(indlæsteValg[i]);
        }
        
        console.log("Indlæste valg: " + choices);
    }
};

const checkAnswer = (e) => { 
    divs.forEach(div => {
        div.classList.add('hidden');
    })

    if (e.target.id === 'restart') {
        choices.length = 0;
        
        localStorage.removeItem('brugerValg');
    } else {
        choices.push(e.target.id);
    }

    localStorage.setItem('brugerValg', JSON.stringify(choices));
    
    console.log(choices);


   switch(e.target.id) {
        case 'c0': document.querySelector('#box0-1').classList.remove('hidden');
        break;
        case 'c01': document.querySelector('#box1').classList.remove('hidden'); 
        break;
        case 'c1': document.querySelector('#box2-1').classList.remove('hidden'); 
        break;
        case 'c2': document.querySelector('#box2-2').classList.remove('hidden'); 
        break;
        case 'c3': document.querySelector('#box2-2').classList.remove('hidden'); 
        break;
        case 'c4': document.querySelector('#box3').classList.remove('hidden'); 
        break;
        case 'c5': document.querySelector('#box2-4').classList.remove('hidden'); 
        break;
        case 'c6': document.querySelector('#box3-1').classList.remove('hidden'); 
        break;
        case 'c7': document.querySelector('#box3-2').classList.remove('hidden'); 
        break;
        case 'c8': document.querySelector('#box4-2').classList.remove('hidden'); 
        break;
        case 'c9': document.querySelector('#box4').classList.remove('hidden'); 
        break;
        case 'restart': document.querySelector('#box1').classList.remove('hidden');
        break;
        

   }
}

btns.forEach(btn => {
    btn.addEventListener('click', checkAnswer);
})