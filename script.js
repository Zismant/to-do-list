document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#input'),
          btn = document.querySelector('#btn'),
          ul = document.querySelector('ul'),
          doListLength = document.querySelector('span'),
          data = [];
       

    btn.addEventListener('click', () => {
        if (!input.value) {return;}


        data.push({dooo: input.value, check: false});
        render();
        input.value = '';
        
       
    });


    function render() {
        console.log(data);
        doListLength.textContent = data.length;
        const uList = document.querySelectorAll('li');

        uList.forEach((item => item.remove()));

        data.forEach((item, i) => {
       
           let li = document.createElement('li');
           let btn = document.createElement("button");
           let checkBox = document.createElement('input');
           checkBox.type = 'checkbox';
           checkBox.checked = item.check;
           btn.textContent = 'del';
           item.check ? li.classList.add('remove') : li.classList.remove('remove');

            li.innerHTML = `<div class='item'>${item.dooo}</div>`;
           
            ul.append(li);
            li.firstChild.firstChild.after(btn);
            li.firstChild.firstChild.after(checkBox);
            
 
            btn.addEventListener('click', () => {
                 if(item.check) {
                 data.splice(i, 1); }  
                 render();
            });
 
            checkBox.addEventListener('click', () => {
                item.check = !item.check;
                
                render();
            });
         

        });

       
           
        


    }


    
    







});