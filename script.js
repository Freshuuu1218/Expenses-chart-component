const values = document.querySelectorAll('.col-value');
const columns = document.querySelectorAll('.day');

columns.forEach((column,idx) =>{
    column.addEventListener('mouseenter',()=>{
        values[idx].classList.toggle('vanish');
    })
    column.addEventListener('mouseout',()=>{
        values[idx].classList.toggle('vanish');
    })
})