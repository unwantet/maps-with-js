const inputEl = document.querySelector("input")
const form = document.querySelector("form")
const ipEl = document.querySelector(".ip-a")

ymaps.ready(renderMap);

function renderMap() {
    let myMap = new ymaps.Map("map",{
        center: [40.388100149508716, 71.78784333878554],
        zoom: 18
    })
}

form.addEventListener("submit", e =>{
    e.preventDefault();
    ipEl.textContent = inputEl.value
    myMap.center = [inputEl.value]
})
