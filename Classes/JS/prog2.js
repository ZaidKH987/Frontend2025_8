const button=document.querySelector('button');
var width=100 ;
var element=document.getElementById('myBar');

function move(){

    id=setInterval(frame,10);
}


function frame()

{
    if(width>=0)
    {   
        width--;
        element.style.width=width+'%';
        console.log(width);
    }

 else{
  clearInterval(id);
 }

}