document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#input'),
          btn = document.querySelector('#btn'),
          ul = document.querySelector('ul');
       

    
    
          

    btn.addEventListener('click', () => {
        if (!input.value) {return;}
 
        console.log(input.value);
        render(input.value);
        input.value = '';
       
    });


    function render(inf) {
           let li = document.createElement('li');
           li.innerHTML = `<div class='item'>${inf} <button>del</button></div>`;
           ul.append(li);

           
        }


    
    







});