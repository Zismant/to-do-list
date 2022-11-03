document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#input'),
          btnAll = document.querySelector('#all'),
          btnFilter = document.querySelector('#filter'),
          btnDontFilter = document.querySelector('#dontFilter'),
          btnAdd = document.querySelector('#btn'),
          ul = document.querySelector('ul'),
          doListLength = document.querySelector('span');
    let data = [];
       
    if (localStorage.length) {
        data = JSON.parse(localStorage.getItem('inf'));
    }
    render(data);

    btnAdd.addEventListener('click', () => {
        if (!input.value) {return;}
        
        data.push({dooo: input.value, check: false});
        

        render(data);
        input.value = '';       
    });

    btnAll.addEventListener('click', () => {
        btnAll.classList.add('active');
        btnFilter.classList.remove('active');
        btnDontFilter.classList.remove('active');
        render(data);  
        
    });
    
    btnFilter.addEventListener('click', () => {
        btnAll.classList.remove('active');
        btnFilter.classList.add('active');
        btnDontFilter.classList.remove('active');      
        ifChecked(data);
    });

    btnDontFilter.addEventListener('click', () => {
        btnAll.classList.remove('active');
        btnFilter.classList.remove('active');
        btnDontFilter.classList.add('active');      
        ifDontChecked(data);
    });



    function ifChecked(inf) {
        const arr = inf.filter(item => item.check);
        render(arr);
    }

    function ifDontChecked(inf) {
        const arr = inf.filter(item => !item.check);
        render(arr);
    }

    function render(inf) {
        localStorage.setItem('inf', JSON.stringify(data));
        console.log(localStorage);
        doListLength.textContent = data.length;
        const uList = document.querySelectorAll('li');

        uList.forEach((item => item.remove()));

        inf.forEach((item, i) => {
       
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
                 render(data);
            });
 
            checkBox.addEventListener('click', () => {
                item.check = !item.check;
                
                render(data);
            });


        });

       
           
        


    }


    
    







});