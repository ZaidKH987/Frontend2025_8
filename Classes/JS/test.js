console.log('HIII')
var pic=document.getElementById('src1') 
function move()
{
  
  if(pic.src='/Classes/Media/MR left.png')
  {
    pic.src='/Classes/Media/mario.png';
    console.log(pic.src)
    
  }

  else{
    pic.src='Classes/Media/MR left.png';
    console.log(pic.src)
  }

}

var student={

    name:'Zaid',
    age:'38',
    Major:"SE",
}

console.log(student.Major)
console.log(student.name)

localStorage.setItem('age',"38")

var age=document.createElement('h1')
age.innerHTML=localStorage.getItem('age ')
var body=document.getElementById('body')
body.appendChild(age)