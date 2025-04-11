const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')   both in use , its depend our choice

setInterval(function (){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);

