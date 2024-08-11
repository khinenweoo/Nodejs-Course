global.setTimeout(() => {
    clearInterval(interval);
}, 5000);

let interval = global.setInterval(() => {
    console.log('hello')
}, 1000);