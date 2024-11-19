const texteBlague=document.querySelector(".laBlague")
const boutonBlague=document.querySelector(".boutonBlague")
boutonBlague.addEventListener("click",()=>{
    fetch("https://api.kanye.rest")
    .then(response => response.json())
    .then(data =>texteBlague.innerHTML=data.quote)})


