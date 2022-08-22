
const advice = document.querySelector(".advice")
const adviceId = document.querySelector(".advice-id")
const dice = document.getElementById("dice")

function load() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(tip => {
        const {slip} = tip
        adviceId.textContent = `Advice #${slip.id}`
        advice.textContent = `“${slip.advice}”`
    })
}

dice.addEventListener("click", ()=>{
    load();
})



