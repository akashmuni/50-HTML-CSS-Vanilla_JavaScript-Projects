const open = document.getElementById('open');
const container = document.getElementById('container');
const close = document.getElementById('close');

open.addEventListener('click', ()=>{
 container.classList.add('active')
})

close.addEventListener('click',()=>{
    container.classList.remove('active');
})
