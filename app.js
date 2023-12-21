const inputEl = document.querySelector("input")
const form = document.querySelector("form")
const ipEl = document.querySelector(".ip-a")

ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [41.3111, 69.2797], // Toshkent markazi koordinatalari
            zoom: 12
        });

        var searchControl = new ymaps.control.SearchControl({
            options: {
                provider: 'yandex#search'
            }
        });

        myMap.controls.add(searchControl);

        document.getElementById('searchForm').addEventListener('submit', function (e) {
            e.preventDefault();
            var inputValue = document.getElementById('searchInput').value;

            searchControl.search(inputValue).then(function (res) {
                var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
                myMap.geoObjects.removeAll();
                myMap.geoObjects.add(new ymaps.Placemark(coordinates));
            });
        });
    }
form.addEventListener("submit", e =>{
    e.preventDefault();
    ipEl.textContent = inputEl.value
    myMap.center = [inputEl.value]
})
