window.addEventListener('load', calculateTime)
function addZero(number) {
    return (number < 10 ? '0' : '') + number;
}
function calculateTime(){
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds()
    let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

    document.getElementById('day').innerHTML = dayNames[dayNumber]
    document.getElementById('hour').innerHTML = addZero(hour)
    document.getElementById('minute').innerHTML = addZero(minute)
    document.getElementById('seconds').innerHTML = addZero(seconds)
    setTimeout(calculateTime, 5)
}


let contry = document.getElementById('country')
fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        contry.textContent = `${data.country} - ${data.city}`;

    })
    .catch(error => {
        console.log(error);
    });