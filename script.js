const clock = document.querySelector('.clock');

const currentTime = () => {

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const html = `<h1>The current time is</h1> <h2>${hours}:${minutes}:${seconds}</h2>`;
    clock.innerHTML = html;

    console.log(hours, minutes, seconds);

};

//call the function
setInterval(currentTime, 1000);
