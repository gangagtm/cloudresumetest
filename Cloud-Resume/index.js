const counter = document.querySelector(".counter-number");
async function updateCounter() {
        let response = await fetch("https://hxfl29flw2.execute-api.us-east-1.amazonaws.com/Prod/visitor/");
        let data = await response.json();
        counter.innerHTML = ` Views: ${data}`;
}
updateCounter();