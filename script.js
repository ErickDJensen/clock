const clock = document.querySelector('.clock');

const currentTime = () => {

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const html = `The current time is ${hours}:${minutes}:${seconds}`;
    clock.innerHTML = html;

    console.log(hours, minutes, seconds);


};

setInterval(currentTime, 1000);
