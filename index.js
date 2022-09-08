let scoreHome = document.getElementById("score-onboard-Home")
let scoreGuest = document.getElementById("score-onboard-Guest")

let countHome=0, countGuest=0


function oneHome(){
    countHome+=1
    scoreHome.textContent = countHome
}
function oneGuest(){
    countGuest+=1
    scoreGuest.textContent = countGuest
}
function twoHome(){
    countHome+=2
    scoreHome.textContent = countHome
}
function twoGuest(){
    countGuest+=2
    scoreGuest.textContent = countGuest
}
function threeHome(){
    countHome+=3
    scoreHome.textContent = countHome
}
function threeGuest(){
    countGuest+=3
    scoreGuest.textContent = countGuest
}

function newGame(){
    countGuest=0,countHome=0
    scoreGuest.textContent=countGuest
    scoreHome.textContent=countHome
}
