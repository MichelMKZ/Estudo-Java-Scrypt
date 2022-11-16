const adviceId = document.getElementById("titulo");
const adviceTxt = document.getElementById("texto");
const adviceBtn = document.getElementById("button-btn");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
    const res = await fetch(url);
    const {slip:{id,advice}} = await res.json();
    adviceId.innerText = id;
    adviceTxt.innerText = advice;
}

getAdvice()

adviceBtn.addEventListener("click",getAdvice)
