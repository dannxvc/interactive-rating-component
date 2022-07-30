let thankYouCard = document.getElementById('thank-you-card');
let formCard = document.getElementById('form');
let finalScore = document.getElementById('final-score');
let options = document.getElementsByName('rate');

//get the score value from the form
const scoreValue=()=>{
    for(let i=0;i<options.length;i++){
        if(options[i].checked){
            return options[i].value 
        }
    }
}
//submit event 
formCard.addEventListener("submit", (e)=>{
    e.preventDefault();
    thankYouCard.classList.add('thank-you-alert');
    formCard.classList.add('form-sent');
    
    let strong = document.createElement('strong');
    strong.textContent = scoreValue();
    finalScore.appendChild(strong);
});
    