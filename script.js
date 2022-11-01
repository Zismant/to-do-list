document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#input'),
          btn = document.querySelector('#btn'),
          ul = document.querySelector('ul');
       

    
    
          

    btn.addEventListener('click', () => {
        if (!input.value) {return;}
 
        
        render(input.value);
        input.value = '';
       
    });


    function render(inf) {
           let li = document.createElement('li');
           let btn = document.createElement("button");
           btn.textContent = 'del'; 
           li.innerHTML = `<div class='item'>${inf}</div>`;
           
           ul.append(li);
           li.firstChild.firstChild.after(btn);

           btn.addEventListener('click', () => {
                li.classList.toggle('remove'); 
           });

        
           
        


    }


    
    







});