var data = new Date()
var horas = data.getHours()
var minutos = data.getMinutes()
var clockHour = document.getElementById('hours')
var clockMinute = document.getElementById('minutes')

if(horas < 10){
    horas = "0" + horas
}
if(minutos < 10){
    minutos = "0" + minutos
}

function updateClock(){
    clockHour.innerHTML = horas
    clockMinute.innerHTML = minutos
    console.log("update clock")
}setInterval (updateClock,1000)




