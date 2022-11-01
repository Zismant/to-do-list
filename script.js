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
           let checkBox = document.createElement('input');
           checkBox.type = 'checkbox';
           btn.textContent = 'del   '; 
           li.innerHTML = `<div class='item'>${inf}</div>`;
           
           ul.append(li);
           li.firstChild.firstChild.after(btn);
           li.firstChild.firstChild.after(checkBox);
           

           

           btn.addEventListener('click', () => {
                if(checkBox.checked) {
                li.remove(); }  
           });

           checkBox.addEventListener('click', () => {
            li.classList.toggle('remove');
            
       });
        
           
        


    }


    
    







});