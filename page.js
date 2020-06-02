var count=0;
document.querySelector(".compute").addEventListener('click',
function(){
    if(count%2==0){
        document.querySelector(".compute").style.background ='#ffffff';
        document.querySelector(".compute").style.color = '#000000';
        count++
    }
    else{
        document.querySelector(".compute").style.background ='#f84e51';
        document.querySelector(".compute").style.color = '#ffffff';
        count++
    }
})