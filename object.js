
const showInfo=function(){
    const name=document.getElementById('name').value;
    const college=document.getElementById('college').value;
    const phone=document.getElementById('phone').value;
    const output=document.createElement('h1');
    output.innerHTML=`I am ${name}. My college name is ${college}.My phone number is ${phone}`;
    document.body.appendChild(output);
}