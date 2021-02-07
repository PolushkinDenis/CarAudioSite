/*function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);


}*/

window.onload = start;

function start(){
var myMap;
ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
function init () {
  myMap = new ymaps.Map("map", {
    center: [53.212773, 50.178403], // Координаты центра карты
    zoom: 15, // Zoom
    controls: []
  });
// Создание метки с круглой активной областью.
var circleLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="circle_layout">!</div></div>');

var circlePlacemark = new ymaps.Placemark(
    [53.212773, 50.178403], {
        hintContent: 'Адрес сайта'
    }, {
        iconLayout: circleLayout,
        // Описываем фигуру активной области "Круг".
        iconShape: {
            type: 'Circle',
            // Круг описывается в виде центра и радиуса
            coordinates: [0, 0],
            radius: 20
        }
    }
);
myMap.geoObjects.add(circlePlacemark);
}
}
