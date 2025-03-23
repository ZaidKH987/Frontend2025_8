var myform=document.getElementsByClassName('userinput')[0];
var myinput=document.getElementsByClassName('input')[0];
var myname=document.getElementsByClassName('myname')[0];



myform.addEventListener('submit', function(e){
e.preventDefault()
console.log(e);
myname.innerHTML=myinput.value;
myinput.value='';

})


var sform=document.getElementsByClassName('sform')[0];
var num1=document.getElementsByClassName('num1')[0];
var num2=document.getElementsByClassName('num2')[0];
var summ=document.getElementsByClassName('summ')[0];

sform.addEventListener('submit', function(e){
e.preventDefault();

summ.innerHTML=parseInt(num1.value)+parseInt(num2.value);
num1.value='';
num2.value='';

})