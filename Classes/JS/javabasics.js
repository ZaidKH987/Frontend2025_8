let x="6";
let y="3";
let z=x + y;
console.log(z); 
let name="Zzaid";
console.log(name);
console.log("My","Name","Zaid")
let num1=10, num2=20;
console.log(--num1);
console.log(num1+=4);

function fun()
{
    console.log("hello world")
}

fun();
fun();  

function changetheme(colour)
{
    var cssfile=document.getElementById('cssfile');
    if (colour=='black'){
 cssfile.href='css/dark.css';
    }

    else{
        cssfile.href='css/light.css';
    }
}

