let btn=document.querySelector('button');
let basket=document.querySelector('div');

btn.addEventListener('click',()=>{
    if(basket.style.display === 'none'){
        basket.style.display ='block';
    }
    else{
        basket.style.display = 'none';
    }
})