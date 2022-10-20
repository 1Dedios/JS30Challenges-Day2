const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    /* Above we're making sure that the second hand moves in ticks in a 360 deg clock */

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getMinutes();
    const hourDegrees = ((mins / 60) * 360) + 90;
    hourHand.style.transform = rotate(`${hourDegrees}deg`);
}

setInterval(setDate, 1000);

setDate();