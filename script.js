const buttons=document.querySelectorAll('button')
buttons.forEach((button)=>{
button.addEventListener("click",()=>{
    const points = Number(button.textContent)
    const score=button.parentElement.parentElement.querySelector(".score p")
    const oldScore=Number(score.textContent)
    const newScore=oldScore+points
    score.textContent=newScore
})
})